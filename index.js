const btnMenu = document.querySelector('.menu')
const list = document.querySelector('.list')

btnMenu.addEventListener('click', function() {
    if(list.style.display === 'block' || list.style.display === '')
        list.style.display = 'none'
    else
        list.style.display = 'block'

    const bar1 = document.querySelector('.bar1')
    const bar2 = document.querySelector('.bar2')
    const bar3 = document.querySelector('.bar3')

    bar1.style.cssText = 'transform: translate(45deg)'
    bar2.style.cssText = 'display: none'
})