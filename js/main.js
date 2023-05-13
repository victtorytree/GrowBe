window.addEventListener('click', function () {
	document.querySelector('.menu-hamburger').onclick = function () {
		document.querySelector('.header__menu').classList.toggle('header__menu--mobile');
	};
});


window.addEventListener('scroll', function () {
	if (pageYOffset > 500) {
		document.querySelector('header').classList.add('header--scrolled');
	}
	else {
		document.getElementById('header').classList.remove('header--scrolled');
	}
});

function dropdown() {
  const selectItem = document.querySelectorAll(".footer-arrow");
  const selectList = document.querySelectorAll(".footer-column__list");
  selectItem.forEach((item, i) => {
      item.addEventListener("click", (event) => {
      selectList[i].classList.toggle("show");
      item.classList.toggle("rotate");
    });
  });
}

dropdown();
