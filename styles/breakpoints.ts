const breakpoints = { laptop: 1024, desktop: 1440 }

export const mediaQuerys =
  typeof window !== 'undefined'
    ? {
        laptop: window.matchMedia(`(min-width: ${breakpoints.laptop}px)`),
        desktop: window.matchMedia(`(min-width: ${breakpoints.desktop}px)`),
      }
    : null

export const mq = {
  /**  \@media (min-width: 1024px) */
  laptop: `@media (min-width: ${breakpoints.laptop}px)`,
  /**  \@media (min-width: 1440px) */
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
}

export default breakpoints
