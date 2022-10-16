import colors from '@/styles/colors'
import { css, keyframes } from '@emotion/css'

const skeletonAnimate = keyframes`
  0% {
    transform: translateX(-100%);
  }

  20% {
    transform: translateX(-100%);
  }

  80% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`

export const root = css({
  'position': 'relative',
  'backgroundColor': colors.skeletonBgColor,
  'height': '1rem',
  'listStyle': 'none',
  'borderRadius': '0.25rem',
  'overflow': 'hidden',

  '::after': {
    'content': '""',
    'position': 'absolute',
    'backgroundColor': colors.skeletonBgColorLight,
    'borderRadius': '0.25rem',
    'animation': `${skeletonAnimate}  2.5s linear infinite`,
    'transform': 'translateX(-100%)',
    'width': '100%',
    'height': '100%',
    'zIndex': 1,
  },
})
