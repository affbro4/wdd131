const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const trans = document.querySelector('.change')

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('change')
   nav.classList.toggle('active');

});

