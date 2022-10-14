import getStarCountStr from '@/utils/getStarCountStr'
import * as styles from './RepoListItem.styles'

export interface RepoListItemProps {
  fullName: string
  htmlUrl: string
  description: string | null
  stargazersCount: number
  language: string | null
  license: string
}

export default function RepoListItem(props: RepoListItemProps) {
  const { fullName, description, htmlUrl, stargazersCount, language, license } =
    props

  const starCount = getStarCountStr(stargazersCount)

  return (
    <li className={styles.root}>
      <a href={htmlUrl} className={styles.fullName}>
        {fullName}
      </a>
      {description && <div className={styles.description}>{description}</div>}
      <div>
        <span>{`star: ${starCount}`}</span>
        &nbsp;&nbsp;
        {language && <span>{`language: ${language}`}</span>}
        &nbsp;&nbsp;
        {license !== '' && <span>{`license: ${license}`}</span>}
      </div>
    </li>
  )
}
