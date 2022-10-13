import { useEffect, useState } from 'react'

export const DELAY_TIME = 1000

export type SearchAction<T> = (inputText: string) => T[]

export default function useDebounceSearch<T>(searchAction: SearchAction<T>) {
  const [inputText, setInputText] = useState('')

  const [result, setResult] = useState<T[]>([])

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const datas = searchAction(inputText)

      setResult(datas)
    }, DELAY_TIME)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [inputText])

  return [inputText, setInputText, result] as const
}