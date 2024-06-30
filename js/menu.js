// Menu
  (function () {
    const menu = document.querySelector('.menu-button');
    menu.addEventListener('click', () => {
      document.querySelector('.navigation__list').classList.toggle('menu_active');
    })
  });
