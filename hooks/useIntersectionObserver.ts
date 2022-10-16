import { useCallback, useRef } from 'react'

export default function useIntersectionObserver<T extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  const elementRef = useRef<T>()

  const callbackRef = useRef<IntersectionObserverCallback>()
  const observerRef = useRef<IntersectionObserver>()

  callbackRef.current = callback

  const refCallback = useCallback((element: T) => {
    if (element === null) {
      return
    }

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((...arg) => {
        return callbackRef.current?.(...arg)
      }, options)
    }

    if (element !== elementRef.current) {
      if (elementRef.current) {
        observerRef.current.unobserve(elementRef.current)
      }

      elementRef.current = element
      observerRef.current.observe(elementRef.current)
    }
  }, [])

  return [elementRef, refCallback] as const
}
