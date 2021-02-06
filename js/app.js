function init() {
	let expandedNavbar = document.getElementById('nav-list');
	let hamburger = document.getElementById('nav-hamburger');
	let close = document.getElementById('nav-close');
	let body = document.getElementById('main');

	hamburger.addEventListener('click', (e) => {
		body.style.position = 'fixed';
		expandedNavbar.classList.add('expanded');
	});

	close.addEventListener('click', (e) => {
		body.style.position = 'static';
		expandedNavbar.classList.remove('expanded');
	});
}

window.addEventListener('load', init);
