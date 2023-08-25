const navToggle = document.querySelector('.nav__toggle');
const navDropdown = document.querySelector('.nav__dropdown');

navToggle.addEventListener('click', () => {
  navDropdown.classList.toggle('show');
});

