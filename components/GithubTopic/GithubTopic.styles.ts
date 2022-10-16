import colors from '@/styles/colors'
import { css } from '@emotion/css'

export const root = css({
  'backgroundColor': colors.topicBgColor,
  'color': colors.topicTextColor,
  'fontWeight': 'bold',
  'fontSize': '0.875rem',
  'borderRadius': '2px',
  'textAlign': 'center',
  'padding': '0.25rem 0.5rem',
  'whiteSpace': 'nowrap',
  'textDecoration': 'none',
  '&:hover': {
    backgroundColor: colors.topicHoverBgColor,
    color: colors.topicTextHoverColor,
  },
})
