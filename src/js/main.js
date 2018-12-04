var x = 0
var y = 0
const log = console.log

const game = document.querySelector('.game')

//button listener
window.addEventListener('keydown', gameLoop)

function gameLoop(event) {
    const head = document.querySelector('.snake-head')
    const body = document.querySelectorAll('.snake-body')
    const head_axis_x = document.querySelector('.head-x')
    const head_axis_y = document.querySelector('.head-y')


    for (let i = 0; i < body.length - 1; i++) {
        let current = body.length - (i + 1)
        body[current].style.top = body[current - 1].style.top
        body[current].style.left = body[current - 1].style.left
    }

    body[0].style.top = y * 24 + 'px'
    body[0].style.left = x * 24 + 'px'

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

    head_axis_y.innerHTML = 'y:' + (y * 24)
    head_axis_x.innerHTML = 'x:' + (x * 24)

}

gameLoop({ key: 'ArrowRight' })

//setInterval(() => { 
//game.innerHTML += '<div class="snake-body"></div>'
//}, 1000)


var food_arr = []

function random() {
    let r = Math.random() * 10
    r = Math.round(r)
    return r  
}


var _x = 0
var _y = 0

function add_food() {
     _x = random()
     _y = random()
     log (_x,_y)
}

add_food()
log (_x,_y)

function foodArr(){
     food_arr.push({x: _x*24, y: _y*24})
}
foodArr()


setInterval (function (){
    random()
    add_food()
    foodArr()
}, 1000)

log (food_arr)