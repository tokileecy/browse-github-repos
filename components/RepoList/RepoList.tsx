import { ReactNode } from 'react'
import * as styles from './RepoList.styles'

export interface RepoListProps {
  children?: ReactNode
}

export default function RepoList(props: RepoListProps) {
  const { children } = props

  return <ul className={styles.root}>{children}</ul>
}
