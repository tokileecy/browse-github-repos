import { forwardRef, ReactNode } from 'react'
import * as styles from './RepoList.styles'

export interface RepoListProps {
  children?: ReactNode
}

export default forwardRef<HTMLUListElement, RepoListProps>(function RepoList(
  props,
  ref
) {
  const { children } = props

  return (
    <ul ref={ref} className={styles.root}>
      {children}
    </ul>
  )
})
