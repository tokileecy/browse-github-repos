import colors from '@/styles/colors'
import { css } from '@emotion/css'

const fullNameColor = '#0969da'

export const root = css({
  padding: '1.25rem 0.75rem',
  listStyle: 'none',
  borderRadius: '0.25rem',
  border: `1px ${colors.repoBorderColor} solid`,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
})

export const fullName = css({
  'color': fullNameColor,
  'marginRight': 'auto',
  'textDecoration': 'none',
  'wordBreak': 'break-all',
  ':hover': {
    textDecoration: 'underline',
  },
})

export const description = css({
  marginTop: '0.25rem',
  fontSize: '0.875rem',
  wordBreak: 'break-word',
})

export const topics = css({
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: '0.375rem',
})

export const meta = css({
  flexGrow: 1,
  flexWrap: 'wrap',
  display: 'inline-flex',
  alignItems: 'flex-end',
  color: colors.textBodyLightColor,
  fontSize: '0.75rem',
  gap: '8px',
})
