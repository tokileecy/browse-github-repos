import { RepoSearchResultItem, Repositories } from '@/api/schemas/repositories'
import axios, { AxiosResponse, CancelToken, CancelTokenSource } from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import useDebounceSearch from './useDebouncedSearch'

export interface RepoStatus {
  page: number
  totalCount: number
  ids: number[]
  idToRepo: Record<number, RepoSearchResultItem>
}

export type SearchAction = (
  options: {
    q: string
    page: number
    per_page: number
  },
  cancelToken?: CancelToken
) => Promise<AxiosResponse<Repositories, any>>

export type StartupCallback = (status: RepoStatus) => void

export const generateInitRepoStatus = () =>
  ({
    ids: [],
    idToRepo: {},
    totalCount: 0,
    page: -1,
  } as RepoStatus)

export default function useRepoList(
  searchAction: SearchAction,
  startupCallback?: StartupCallback
) {
  const [repoStatus, setRepoStatus] = useState<RepoStatus>(
    generateInitRepoStatus()
  )

  const [error, setError] = useState<string | null>(null)
  const [isKeying, setIsKeying] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const cancelTokenRef = useRef<CancelTokenSource>()

  const handleError = useCallback(
    (error: unknown) => {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message)
      } else if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('uncertain error')
      }
    },
    [error]
  )

  const handleSearchChange = async (dbounceText: string) => {
    try {
      if (dbounceText !== '') {
        setIsFetching(true)

        const cancelTokenSource = axios.CancelToken.source()

        cancelTokenRef.current?.cancel()
        cancelTokenRef.current = cancelTokenSource

        const res = await searchAction(
          {
            q: dbounceText,
            per_page: 100,
            page: 1,
          },
          cancelTokenSource.token
        )

        cancelTokenRef.current = undefined

        const items = res.data.items

        const nextRepoStatus = items.reduce(
          (prev, data) => {
            prev.ids.push(data.id)
            prev.idToRepo[data.id] = data

            return prev
          },
          {
            ...generateInitRepoStatus(),
            totalCount: res.data.total_count,
          } as RepoStatus
        )

        setRepoStatus({ ...nextRepoStatus, page: 1 })
        startupCallback?.(nextRepoStatus)
      } else {
        setRepoStatus(generateInitRepoStatus())
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled')
      } else {
        handleError(error)
        setRepoStatus(generateInitRepoStatus())
      }
    } finally {
      setIsKeying(false)
      setIsFetching(false)
    }
  }

  const [search, setSearch] = useDebounceSearch<string>('', handleSearchChange)

  const fetchRepos = async () => {
    try {
      setIsFetching(true)

      const res = await searchAction({
        q: search,
        per_page: 100,
        page: repoStatus.page,
      })

      const datas = res.data.items

      setRepoStatus((prevRepoStatus) => {
        const nextRepoStatus = datas.reduce(
          (prev, data) => {
            prev.ids.push(data.id)
            prev.idToRepo[data.id] = data

            return prev
          },
          {
            ...prevRepoStatus,
            ids: [...prevRepoStatus.ids],
            idToRepo: { ...prevRepoStatus.idToRepo },
          } as RepoStatus
        )

        nextRepoStatus.ids = Array.from(new Set([...nextRepoStatus.ids]))

        return nextRepoStatus
      })
    } catch (error) {
      handleError(error)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    setError(null)
    setIsKeying(true)
  }, [search])

  useEffect(() => {
    if (search !== '' && repoStatus.page > 1) {
      fetchRepos()
    }
  }, [repoStatus.page])

  const fetchNextPage = useCallback(() => {
    if (error === null) {
      setRepoStatus((prev) => {
        const next = { ...prev }

        next.page++
        return next
      })
    }
  }, [])

  const reFetchPage = useCallback(() => {
    setError(null)

    if (repoStatus.page === -1) {
      handleSearchChange(search)
    } else {
      fetchRepos()
    }
  }, [repoStatus.page, search])

  return {
    search,
    setSearch,
    repoStatus,
    isFetching,
    error,
    fetchNextPage,
    reFetchPage,
    isKeying,
  }
}
