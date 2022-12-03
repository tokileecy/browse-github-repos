const rtf1 = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
  localeMatcher: 'best fit',
})

const DIVISIONS = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' },
] as const

const formatRelativeTime = (date: Date) => {
  let duration = (date.getTime() - new Date().getTime()) / 1000

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i]

    if (Math.abs(duration) < division.amount) {
      return rtf1.format(Math.round(duration), division.name)
    }

    duration /= division.amount
  }
}

export default formatRelativeTime
