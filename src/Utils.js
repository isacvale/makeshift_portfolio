const makeId = str => str
    .replaceAll(' ', '&')
    .replaceAll('-', '&')

export { makeId }