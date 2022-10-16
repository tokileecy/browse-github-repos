import { ReactNode } from 'react'
import * as styles from './GithubTopic.styles'

export interface GithubTopicProps {
  children?: ReactNode
}

export default function GithubTopic(props: GithubTopicProps) {
  const { children } = props

  return (
    <a
      href={`https://github.com/topics/${children}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.root}
    >
      {children}
    </a>
  )
}
