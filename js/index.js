const $open = document.getElementById('btn-open')
const $navMenu = document.getElementById('nav')

$open.addEventListener('touchstart', () =>  {
  toggleMenu()
})

$open.addEventListener('click', () => {
  toggleMenu()
})

function toggleMenu() {
  $navMenu.classList.toggle('active')

  if($navMenu.classList.contains('active')) {
    $open.className = 'fas fa-times btn-nav'
  } else {
    $open.className = 'fas fa-bars btn-nav'
  }
}
