import * as styles from './SearchInput.styles'
import { ChangeEventHandler, ReactNode } from 'react'

export interface SearchInputProps {
  /**
   * The label content.
   */
  label?: ReactNode
  /**
   * The value of input element.
   */
  value?: string
  /**
   * Callback fired when the value is changed.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function SearchInput(props: SearchInputProps) {
  const { label = '', value = '', onChange } = props

  return (
    <label className={styles.root}>
      <span className={styles.labelText}>{label}</span>
      <input className={styles.input} value={value} onChange={onChange} />
    </label>
  )
}
