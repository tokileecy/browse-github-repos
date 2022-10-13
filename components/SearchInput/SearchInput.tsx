import * as styles from './SearchInput.styles'
import { ChangeEventHandler } from 'react'

export interface SearchInputProps {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function SearchInput(props: SearchInputProps) {
  const { value, onChange } = props

  return <input className={styles.root} value={value} onChange={onChange} />
}
