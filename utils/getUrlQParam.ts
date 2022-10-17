const getUrlQParam = () => {
  if (typeof window !== 'undefined') {
    const qParam = new URLSearchParams(window.location.search).get('q')

    return qParam ?? ''
  } else {
    return ''
  }
}

export default getUrlQParam
