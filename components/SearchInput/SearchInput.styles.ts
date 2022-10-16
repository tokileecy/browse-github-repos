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
  paddingLeft: '8px',
  paddingRight: '8px',
  outline: 'none',
  borderBottom: `solid 1px ${colors.searchInputBorderColor}`,
})
