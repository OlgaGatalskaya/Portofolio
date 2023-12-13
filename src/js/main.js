window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-menu'),
    menuItem = document.querySelectorAll('.list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-menu_active');
        })
    })

})


document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => {
        const el = document.querySelector('.element') // ищем элемент, который будет следовать за курсором
        window.addEventListener('mousemove', e => { // при движении курсора
            const target = e.target // определяем, где находится курсор
            if (!target) return
            if (target.closest('a')) { // если курсор наведён на ссылку
                el.classList.add('element_active') // элементу добавляем активный класс
            } else { // иначе
                el.classList.remove('element_active') // удаляем активный класс
            }
            el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
            el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
        })
    }
    followCursor()
})
