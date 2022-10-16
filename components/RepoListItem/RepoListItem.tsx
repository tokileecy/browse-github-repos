import formatRelativeTime from '@/utils/formatRelativeTime'
import toThousandUnit from '@/utils/toThousandUnit'
import GithubTopic from '../GithubTopic'
import * as styles from './RepoListItem.styles'

export interface RepoListItemProps {
  fullName: string
  htmlUrl?: string
  description?: string | null
  stargazersCount?: number
  language?: string | null
  license?: string
  pushedAt?: string
  issue?: number
  topics?: string[]
}

export default function RepoListItem(props: RepoListItemProps) {
  const {
    fullName,
    description,
    htmlUrl,
    stargazersCount,
    language = null,
    license = '',
    topics = [],
    pushedAt,
    issue,
  } = props

  const isPushedAtIsDate = pushedAt && !isNaN(Date.parse(pushedAt))

  if (!isPushedAtIsDate) {
    console.warn(`RepoListItem: prop pushedAt should be a date string.`)
  }

  return (
    <li className={styles.root}>
      <a href={htmlUrl} className={styles.fullName}>
        {fullName}
      </a>
      {description && <div className={styles.description}>{description}</div>}

      {topics.length > 0 && (
        <div className={styles.topics}>
          {topics.map((topic, index) => (
            <GithubTopic key={topic + index}>{topic}</GithubTopic>
          ))}
        </div>
      )}

      <div className={styles.meta}>
        {stargazersCount !== undefined && Number.isInteger(stargazersCount) && (
          <span>&#x2606;{toThousandUnit(stargazersCount)}</span>
        )}
        {language && <span>{language}</span>}
        {license !== '' && <span>{`${license} license`}</span>}

        {pushedAt && isPushedAtIsDate && (
          <span>{`Updated ${formatRelativeTime(new Date(pushedAt))}`}</span>
        )}
        {issue !== undefined && Number.isInteger(issue) && (
          <span>
            {`${toThousandUnit(issue)}  issue${issue > 1 ? 's' : ''} need help`}
          </span>
        )}
      </div>
    </li>
  )
}
