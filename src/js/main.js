var x = 1

//button listener
window.addEventListener('keydown', (event) => {
    const head = document.querySelector('.snake-head')
    console.log(event.key)
    if (event.key == 'ArrowRight') {
        x++
        console.log('right', x * 24)
    }
    head.style.left = x * 24 + 'px'
})
