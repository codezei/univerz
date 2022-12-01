// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	toggleMobMenu ()
})

function toggleMobMenu () {
	let menuBtn = document.querySelector('.header__menu-btn')
	let mobMenu = document.querySelector('.mob-menu')
	let mobMenuInner = document.querySelector('.mob-menu__inner')
	menuBtn.addEventListener('click', function (e) {
		mobMenu.classList.add('open')
		setTimeout(function () {
			mobMenuInner.classList.add('open')
		}, 10)
	})
	mobMenu.addEventListener('click', function (e) {
		if (e.target === e.currentTarget || e.target.classList.contains('mob-menu__close')) {
			mobMenuInner.classList.remove('open')
			setTimeout(function () {
				mobMenu.classList.remove('open')
			}, 400)
		}
	})
}
