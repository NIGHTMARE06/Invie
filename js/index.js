const $open = document.getElementById('btn-open')
const $navMenu = document.getElementById('nav')
const $body = document.body
const media = window.matchMedia('(max-width: 500px)')

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Media query for button and the navbar
mediaQuery()
media.addListener(mediaQuery)

function toggleMenu() {
  if($navMenu.classList.contains('active')) {
    closeMenu()
  } else {
    openMenu()
  }
}

function openMenu() {
  $navMenu.classList.add('active')
  $open.className = 'fas fa-times btn-nav'
}

function closeMenu() {
  $navMenu.classList.remove('active')
  $open.className = 'fas fa-bars btn-nav'
}

function mediaQuery() {
  if (media.matches) {
    $open.addEventListener('click', toggleMenu)
  } else {
    $open.removeEventListener('click', toggleMenu)
  }
}

// Be lazy
var bLazy = new Blazy({
  selector: 'img'
})

// Hammer.js
var hammer = new Hammer($body)

hammer.on('swiperight', openMenu)
hammer.on('swipeleft', closeMenu)
