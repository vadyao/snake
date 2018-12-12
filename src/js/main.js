'use strict'
var x = 0
var y = 0

var old_tail_x = 0
var old_tail_y = 0
var dir = 'Right'

const log = console.log
var food_arr = []

const game = document.querySelector('.game')
let foodContainer = document.querySelector('.food-container')

//button listener
window.addEventListener('keydown', set_diraction)

setInterval(midle_ware, 1000)

function midle_ware() {
    let fake_event = {}
    if (dir == 'Right') fake_event.key = 'ArrowRight'
    if (dir == 'Left') fake_event.key = 'ArrowLeft'
    if (dir == 'Up') fake_event.key = 'ArrowUp'
    if (dir == 'Down') fake_event.key = 'ArrowDown'

    gameLoop(fake_event)
}

function set_diraction(event) {
    if (event.key == 'ArrowRight') dir = 'Right'
    if (event.key == 'ArrowLeft') dir = 'Left'
    if (event.key == 'ArrowUp') dir = 'Up'
    if (event.key == 'ArrowDown') dir = 'Down'
}

function gameLoop(event) {
    const head = document.querySelector('.snake-head')
    const body = document.querySelectorAll('.snake-body')
    const head_axis_x = document.querySelector('.head-x')
    const head_axis_y = document.querySelector('.head-y')



    for (let i = 0; i < body.length - 1; i++) {
        let current = body.length - (i + 1)
        // remember  old_tail position
        if (i == body.length - 2) {
            old_tail_x = body[current].style.left
            old_tail_y = body[current].style.top
            log(body[current].style.left)
        }

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


    for (let i = 0; i < body.length; i++) {
        let _y = body[i].style.top
        let _x = body[i].style.left
        _y = _y.split('')
        _y.pop()
        _y.pop()
        _y = _y.join('')
        _x = _x.split('')
        _x.pop()
        _x.pop()
        _x = _x.join('')
        _y = _y / 24
        _x = _x / 24
        log('body:', _x, _y)
        if (x == _x && y == _y) {
            food_arr = []
            alert('game over')
            location.reload()
        }
        
    }


    head_axis_y.innerHTML = 'y:' + (y * 24)
    head_axis_x.innerHTML = 'x:' + (x * 24)

    food_arr.map((food, i) => {
        if (x == food.x && y == food.y) {
            food_arr.splice(i, 1)
            draw_food()
            game.innerHTML += `<div style="left:${old_tail_x}; top:${old_tail_y}" class="snake-body"></div>`
        }
    })
    log('control')
}

gameLoop({ key: 'ArrowRight' })





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
    if (_x == 10) _x = 9
    if (_y == 10) _y = 9
    log(_x, _y)
}



function foodArr() {
    food_arr.push({ x: _x, y: _y })
}


function draw_food() {
    let foodContainer = document.querySelector('.food-container')

    log('draw - food')
    foodContainer.innerHTML = ''
    food_arr.map((food) => {
        // foodContainer.innerHTML += '*'

        foodContainer.innerHTML += `
           <div style="left: ${food.x * 24}px; top: ${food.y * 24}px;" class="food"></div>`
        log('food * ', food)
    })

}


setInterval(function () {
    random()
    add_food()
    foodArr()
    draw_food()
}, 9000)


