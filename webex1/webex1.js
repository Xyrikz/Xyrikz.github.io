document.getElementById('radio1').checked = true;
let slide = 2;
setInterval(function () {
	document.getElementById('radio' + slide).checked = true;
	slide++;
	if (slide > 3) {
		slide = 1;
	}
}, 5000);

let mobileToggle = document.querySelector('.mobile-nav-toggle');
let mobileMenu = document.querySelector('.mobile-nav-links');
let mobileHome = document.querySelector('.mobile-nav-home');
let mobileNavButton = document.querySelector('.mobile-contact-toggle');

mobileToggle.addEventListener('click', function () {
	mobileMenu.classList.toggle('is-active');
	mobileToggle.classList.toggle('active-color');
	mobileHome.classList.toggle('active-color');
});

mobileNavButton.addEventListener('click', function () {
	mobileMenu.classList.remove('is-active');
	mobileToggle.classList.remove('active-color');
	mobileHome.classList.remove('active-color');
});
