import colors from '@/styles/colors'
import { css } from '@emotion/css'

export const root = css({
  padding: '0 2rem',
})

export const main = css({
  minHeight: '100vh',
  padding: '4rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const title = css({
  margin: 0,
  marginBottom: '2rem',
  fontSize: '3.5rem',
  lineHeight: 1.15,
  textAlign: 'center',
  color: colors.textBodyColor,
})

export const content = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
})

export const scrollObserver = css({
  height: 0,
  listStyle: 'none',
})

export const endUl = css({
  padding: 0,
  margin: 0,
})
