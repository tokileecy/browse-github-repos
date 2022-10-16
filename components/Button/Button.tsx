import { MouseEventHandler, ReactNode } from 'react'
import * as styles from './Button.styles'

export interface ButtonProps {
  children?: ReactNode
  /**
   * Callback fired when the Button Clicked.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: ButtonProps) {
  const { children, onClick } = props

  return (
    <button className={styles.root} onClick={onClick}>
      {children}
    </button>
  )
}
