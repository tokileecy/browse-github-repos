import colors from '@/styles/colors'
import { css } from '@emotion/css'

export const root = css({
  'width': '100px',
  'height': '35px',
  'borderRadius': '100px',
  'fontWeight': 'bold',
  'fontSize': '0.875rem',
  'cursor': 'pointer',
  'color': colors.btnColor,
  'backgroundColor': colors.btnBgColor,
  'border': `1px solid ${colors.btnBorderborder}`,
  '&:hover': {
    backgroundColor: colors.btnHoverBgColor,
  },
  '&:active': {
    backgroundColor: colors.btnActiveBgColor,
  },
})
