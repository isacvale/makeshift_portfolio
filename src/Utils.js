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

const setFocusablePage = (() => {
    let focusable = true

    return state => {
        const lightBox = document.querySelector('.Lightbox')
        focusable = state

        if (lightBox) {
            const focusableElements = [
                ...document.querySelectorAll(':not(.Lightbox) a'),
                ...document.querySelectorAll(':not(.Lightbox) button')
            ].filter(el => !lightBox.contains(el))

            focusableElements.forEach(el =>
                el.setAttribute('tabIndex', state ? '0' : '-1')
            )
        }
    }
    
})()

export { debouncer, makeId, setFocusablePage }