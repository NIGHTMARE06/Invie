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
}
