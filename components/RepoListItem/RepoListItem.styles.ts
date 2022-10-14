import { css } from '@emotion/css'

const fullNameColor = '#0969da'

export const root = css({
  padding: '1.25rem 0.75rem',
  listStyle: 'none',
  borderRadius: '0.25rem',
  border: '1px grey solid',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
})

export const fullName = css({
  'color': fullNameColor,
  'textDecoration': 'none',
  ':hover': {
    textDecoration: 'underline',
  },
})

export const description = css({
  marginTop: '0.25rem',
})
