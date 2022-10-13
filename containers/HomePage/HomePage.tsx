import Head from 'next/head'
import SearchInput, { SearchInputProps } from '@/components/SearchInput'
import useDebounceSearch from '@/hooks/useDebouncedSearch'
import api from '@/api'
import * as styles from './HomePage.styles'

const fetchRepos = async (text: string) => {
  try {
    if (text !== '') {
      const res = await api.listRepos({ q: text })

      return res.data.items
    } else {
      return []
    }
  } catch (error) {
    console.error('something went wrong')
  }

  return []
}

export default function HomePage() {
  const [search, setSearch, result] = useDebounceSearch(fetchRepos)

  const handleSearchInputChange: SearchInputProps['onChange'] = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={styles.root}>
      <Head>
        <title>Browse Github Repos</title>
        <meta name="description" content="Browse Github Repos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Browse Github Repos</h1>
        <SearchInput value={search} onChange={handleSearchInputChange} />
        {result.map((repo) => {
          return <div key={repo.id}>{repo.full_name}</div>
        })}
      </main>
    </div>
  )
}
