import { css } from '@emotion/css'
import colors from '@/styles/colors'

export const root = css({
  display: 'inline-flex',
  width: '100%',
  alignItems: 'center',
})

export const labelText = css({
  marginRight: '8px',
})

export const input = css({
  flexGrow: 1,
  height: '2.375rem',
  border: 0,
  outline: 'none',
  borderRadius: 0,
  borderBottom: `solid 1px ${colors.searchInputBorderColor}`,
})
