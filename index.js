const btnMenu = document.querySelector('.menu')
const list = document.querySelector('.list')
const smallList = document.querySelector('.small-list')
const sideList = document.querySelector('.sidebar')
const listItem = document.querySelector('.list-item')

btnMenu.addEventListener('click', function() {
    smallList.style.transition = 'all 0.4s ease-in-out'
    list.style.transition = 'all 0.4s ease-in-out'
    if(list.style.display === 'block' || list.style.display === '') {
        smallList.style.display = 'block'
        list.style.display = 'none'
        sideList.style.width = '10%'
        btnMenu.style.marginLeft = '1rem'
    } else {
        smallList.style.display = 'none'
        list.style.display = 'block'
        sideList.style.width = '15%'
        btnMenu.style.marginLeft = '2rem'
        // listItem.style.margin = '0.3rem'
    }
})