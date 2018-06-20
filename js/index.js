const $open = document.getElementById('btn-open')
const $navMenu = document.getElementById('nav')
const $body = document.body
const media = window.matchMedia('(max-width: 500px)')

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
  $body.classList.add('menu-opened')
  $open.className = 'fas fa-times btn-nav'
}

function closeMenu() {
  $navMenu.classList.remove('active')
  $body.classList.remove('menu-opened')
  $open.className = 'fas fa-bars btn-nav'
}

function mediaQuery() {
  if (media.matches) {
    $open.addEventListener('click', toggleMenu)
  } else {
    $open.removeEventListener('click', toggleMenu)
  }
}

var bLazy = new Blazy({
  selector: 'img'
})

var hammer = new Hammer($body)

hammer.on('swiperight', openMenu)

hammer.on('swipeleft', closeMenu)
