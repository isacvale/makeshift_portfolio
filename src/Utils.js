const makeId = str => str
    .replaceAll(' ', '&')
    .replaceAll('-', '&')

const debouncer = (callback, delay=200) => {
    let print = Math.random()

    return function () {
        const newPrint = Math.random()
        print = newPrint

        setTimeout(() => {
            if (print === newPrint) {
                callback()
            }
        }, delay)
    }
}

export { debouncer, makeId }