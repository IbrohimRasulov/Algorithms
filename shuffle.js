const shuffle = (array) => {
  const shuffledArray = array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffledArray
}

console.log(shuffle([1, 2, 3, 4, 5]))