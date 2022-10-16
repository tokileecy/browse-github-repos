import { css, cx } from '@emotion/css'
import * as styles from './Skeleton.styles'

export interface LineSkeletonProps {
  /** Skeleton width, eg: 100px, 50%... */
  width?: string
}

export default function LineSkeleton(props: LineSkeletonProps) {
  const { width = '100%' } = props

  return (
    <div
      className={cx(
        styles.root,
        css({
          width,
        })
      )}
    ></div>
  )
}
