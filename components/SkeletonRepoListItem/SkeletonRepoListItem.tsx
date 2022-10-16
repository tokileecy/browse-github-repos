import { cx } from '@emotion/css'
import LineSkeleton from '../LineSkeleton/LineSkeleton'
import * as styles from './SkeletonRepoListItem.styles'

export interface SkeletonRepoListItemProps {
  /**
   * Hide Component or not.
   */
  hidden?: boolean
}
export default function SkeletonRepoListItem(props: SkeletonRepoListItemProps) {
  const { hidden = false } = props

  return (
    <li
      className={cx(styles.root, {
        hidden,
      })}
    >
      <LineSkeleton width="20%" />
      <LineSkeleton width="100%" />
      <LineSkeleton width="60%" />
      <LineSkeleton width="30%" />
    </li>
  )
}
