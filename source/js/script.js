if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

const menuBtn = document.querySelector('.nav__toggle');
const menuNav = document.querySelector('.nav');

if (menuBtn) {
  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuNav.classList.toggle('nav--opened');
  });
}

/*
var swiper = new Swiper('.swiper-container', { slidesPerView: 1, pagination: { el: '.swiper-pagination', clickable: true, }, });
*/