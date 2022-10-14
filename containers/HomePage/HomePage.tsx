import Head from 'next/head'
import SearchInput, { SearchInputProps } from '@/components/SearchInput'
import RepoList from '@/components/RepoList'
import RepoListItem from '@/components/RepoListItem'
import useDebounceSearch from '@/hooks/useDebouncedSearch'
import getLicense from '@/utils/getLicense'
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
        <RepoList>
          {result.map((repo) => {
            const license = getLicense(repo.license)

            return (
              <RepoListItem
                key={repo.id}
                fullName={repo.full_name}
                htmlUrl={repo.html_url}
                description={repo.description}
                stargazersCount={repo.stargazers_count}
                language={repo.language}
                license={license}
              />
            )
          })}
        </RepoList>
      </main>
    </div>
  )
}
