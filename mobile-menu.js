const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const menuClose = document.querySelector('#mobile-menu i');
const header = document.querySelector('header')

function toggleMenu(button) {
  button.addEventListener('click' , () => {
    mobileMenu.classList.toggle('display-none');
    document.body.classList.toggle('no-scroll');
    header.classList.toggle('display-none')
  })
}

toggleMenu(hamburgerMenu);
toggleMenu(menuClose)