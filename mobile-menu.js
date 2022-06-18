const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const menuClose = document.querySelector('#mobile-menu i')

function toggleMenu(button) {
  button.addEventListener('click' , () => {
    mobileMenu.classList.toggle('display-none');
    document.body.classList.toggle('no-scroll');
  })
}

toggleMenu(hamburgerMenu);
toggleMenu(menuClose)