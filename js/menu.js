
const menu = document.querySelector('.menu-button');
menu.addEventListener('click', () => {
  document.querySelector('.nav-t__list').classList.toggle('menu_active');
});
