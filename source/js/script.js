const navToggle = document.querySelector('.nav__toggle');
const navMenuDropdown = document.querySelector('.nav__menu-dropdown');

navToggle.addEventListener('click', () => {
  navMenuDropdown.classList.toggle('nav__menu-dropdown--opened');
});

