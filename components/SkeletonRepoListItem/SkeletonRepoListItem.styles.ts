import { css } from '@emotion/css'

export const root = css({
  'listStyle': 'none',
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'column',
  'gap': '1rem',
  'visibility': 'visible',
  '&.hidden': {
    display: 'none',
  },
})
