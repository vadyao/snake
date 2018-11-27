var x = 1
var y = 1

//button listener
window.addEventListener('keydown', (event) => {
    const head = document.querySelector('.snake-head')
    console.log(event.key)
    if (event.key == 'ArrowRight') {
        x++
        console.log('right', x * 24)
    }

    head.style.left = x * 24 + 'px'

    if (event.key == 'ArrowLeft') {
        x--
        console.log('left', x * 24)
    }
    head.style.left = x * 24 + 'px'

    if (event.key == 'ArrowUp') {
        y--
        console.log('up', y * 24)
    }
    head.style.top = y * 24 + 'px'

    if (event.key == 'ArrowDown') {
        y++
        console.log('down', y * 24)
    }
    head.style.top = y * 24 + 'px'


})
