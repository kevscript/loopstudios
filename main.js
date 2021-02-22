const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')
const body = document.body

burger.addEventListener('click', () => {
  if (burger.classList.contains('open')) {
    body.style.overflow = 'auto'
    burger.classList.remove('open')
    menu.classList.remove('isOpen')
  } else {
    body.style.overflow = 'hidden'
    burger.classList.add('open')
    menu.classList.add('isOpen')
  }
})

window.addEventListener('resize', () => {
  const clientWidth = window.innerWidth
  if (clientWidth > 980) {
    body.style.overflow = 'auto'
    burger.classList.remove('open')
    menu.classList.remove('isOpen')
  }
})