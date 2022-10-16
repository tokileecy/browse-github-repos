import { useState } from 'react'
import { cx } from '@emotion/css'
import * as styles from './ErrorRepoListItem.styles'
import Button from '../Button'

export interface ErrorRepoListItemProps {
  /**
   * Detailed error message.
   */
  error?: string
  /**
   * Callback fired when Retry Button Click.
   */
  onRetryClick?: () => void
}

export default function ErrorRepoListItem(props: ErrorRepoListItemProps) {
  const { error, onRetryClick } = props

  const [showErrorDetail, setShowErrorDetail] = useState(false)

  return (
    <li className={styles.root}>
      <div>
        <span className={styles.title}>
          Something went wrong. Try reloading.
        </span>
        <a
          href=""
          className={styles.showMore}
          onClick={(e) => {
            e.preventDefault()
            setShowErrorDetail((prev) => !prev)
          }}
        >
          Show More &#9660;
        </a>
      </div>
      <div className={cx(styles.detailMessage, { show: showErrorDetail })}>
        {error}
      </div>
      <Button
        onClick={() => {
          setShowErrorDetail(false)
          onRetryClick?.()
        }}
      >
        Retry
      </Button>
    </li>
  )
}
