import { mq } from '@/styles/breakpoints'
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
  [mq.laptop]: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  [mq.desktop]: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
})

export const title = css({
  margin: 0,
  marginBottom: '2rem',
  fontSize: '1.75rem',
  lineHeight: 1.15,
  textAlign: 'center',
  [mq.laptop]: {
    fontSize: '2rem',
  },
  [mq.desktop]: {
    fontSize: '3.5rem',
  },
})

export const reportListContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
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
