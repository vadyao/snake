var x = 0
var y = 0

//button listener
window.addEventListener('keydown', gameLoop)

function gameLoop(event) {
    const head = document.querySelector('.snake-head')
    const body = document.querySelector('.snake-body')
    console.log(event)

    body.style.top = y * 24 + 'px'
    body.style.left = x * 24 + 'px'

    if (event.key == 'ArrowRight') x++
    if (event.key == 'ArrowLeft') x--
    if (event.key == 'ArrowUp') y--
    if (event.key == 'ArrowDown') y++

    if (x > 9) x = 0
    if (x < 0) x = 9
    if (y > 9) y = 0
    if (y < 0) y = 9

    head.style.top = y * 24 + 'px'
    head.style.left = x * 24 + 'px'


}

gameLoop({ key: 0 })


