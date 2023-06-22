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

window.addEventListener('load', function () {
	const footerEls = document.querySelectorAll(".footer-column__list");
	const footerItems = document.querySelectorAll(".footer-arrow");
	footerItems.forEach((item, i) => {
			item.addEventListener("click", (event) => {
			footerEls[i].classList.toggle("footer-column__list--show");
			item.classList.toggle("rotate");
		});
	});
});




