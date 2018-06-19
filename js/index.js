const $open = document.getElementById('btn-open')
const $navMenu = document.getElementById('nav')
const media = window.matchMedia('(max-width: 500px)')

mediaQuery()
media.addListener(mediaQuery)

function toggleMenu() {
  $navMenu.classList.toggle('active')

  if($navMenu.classList.contains('active')) {
    $open.className = 'fas fa-times btn-nav'
  } else {
    $open.className = 'fas fa-bars btn-nav'
  }
}

function mediaQuery() {
  if (media.matches) {
    $open.addEventListener('click', toggleMenu)
  } else {
    $open.removeEventListener('click', toggleMenu)
  }
}

