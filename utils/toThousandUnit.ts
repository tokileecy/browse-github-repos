const toThousandUnit = (value: number) => {
  if (value > 999) {
    return `${(value / 1000).toPrecision(3)}k`
  } else {
    return `${value}`
  }
}

export default toThousandUnit
