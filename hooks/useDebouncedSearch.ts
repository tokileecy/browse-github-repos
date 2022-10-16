import { useEffect, useState } from 'react'

export const DELAY_TIME = 500

export type SearchAction<T> = (value: T) => Promise<void>

export default function useDebounceSearch<T>(
  initValue: T,
  searchAction: SearchAction<T>
) {
  const [value, setValue] = useState<T>(initValue)

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      await searchAction(value)
    }, DELAY_TIME)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [value])

  return [value, setValue] as const
}
