import colors from '@/styles/colors'
import { css } from '@emotion/css'

export const root = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  listStyle: 'none',
})

export const title = css({
  fontSize: '0.875rem',
  color: colors.mainFontColor,
})

export const showMore = css({
  marginLeft: '8px',
  fontSize: '0.875rem',
  color: colors.mainFontColor,
  fontWeight: 'bold',
})

export const detailMessage = css({
  'width': '100%',
  'textAlign': 'left',
  'padding': '0.75rem 1.75rem',
  'color': colors.detailMessageColor,
  'backgroundColor': colors.detailMessageBgColor,
  'fontSize': '0.875rem',
  'display': 'none',

  '&.show': {
    display: 'initial',
  },
})
