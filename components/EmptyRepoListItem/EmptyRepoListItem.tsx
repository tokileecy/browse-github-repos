import * as styles from './EmptyRepoListItem.styles'

export interface EmptyRepoListItemProps {
  /**
   * Search text.
   */
  search?: string
}

export default function EmptyRepoListItem(props: EmptyRepoListItemProps) {
  const { search } = props

  return (
    <li className={styles.root}>
      {`We couldn’t find any repositories matching "${search}"`}
    </li>
  )
}
