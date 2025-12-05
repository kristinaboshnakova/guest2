const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ===== SHOW MENU ===== */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* ===== HIDDEN MENU ===== */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('scroll-header')
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 200,
  // reset: true, // ако искаш да се повтаря всеки път при скрол
})

/* Показваме елементите в home секцията последователно */
sr.reveal('.home__title')

sr.reveal('.home__images', { delay: 300 })
sr.reveal('.home__sticker', { delay: 400, origin: 'right' })
sr.reveal('.home__data', { delay: 500, origin: 'bottom' })

/* Всички картинки (splash, coffee, beans, ice, leaf) една по една */
sr.reveal('.home__images img', { delay: 300, interval: 120 })

  