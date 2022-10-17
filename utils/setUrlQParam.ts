const setUrlQParam = (search: string) => {
  const url = new URL(window.location.toString())

  url.searchParams.set('q', search)
  window.history.pushState({}, '', url)
}

export default setUrlQParam
