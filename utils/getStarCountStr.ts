const getStarCountStr = (stargazersCount: number) => {
  return stargazersCount > 1000
    ? `${Math.ceil(stargazersCount / 1000)}k`
    : stargazersCount.toString()
}

export default getStarCountStr
