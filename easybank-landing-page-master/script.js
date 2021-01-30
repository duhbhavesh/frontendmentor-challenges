const navList = document.querySelector('.nav__links');
const toggler = document.querySelector('.toggle__btn');

const toggleImg = toggler.querySelector('.toggle__img');

toggler.addEventListener('click', () => {
	const img = toggleImg.getAttribute('src');
	navList.classList.toggle('mobile');

	if (navList.classList.contains('mobile') === false) {
		toggleImg.setAttribute('src', './images/icon-hamburger.svg');
	} else {
		toggleImg.setAttribute('src', './images/icon-close.svg');
	}
});

const mquery = window.matchMedia('(min-width: 1000px)');

mquery.addListener(() => {
	if (mquery.matches) {
		navList.classList.remove('mobile');
		toggleImg.setAttribute('src', './images/icon-hamburger.svg');
	}
});
