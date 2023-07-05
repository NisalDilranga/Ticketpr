// NAVBAR
const navListWrapper = document.querySelector('.nav__list__wrapper')
const navLink = document.querySelectorAll('.nav__menu__item')
const navToggle = document.querySelector('.nav__toggle')

navToggle.addEventListener('click', function () {
	navListWrapper.classList.toggle('show')
})

navLink.forEach(item=> {
	item.addEventListener('click', function () {
		navListWrapper.classList.remove('show')
	})
})







// BLOG
const blogList = document.querySelector('.blog__list')

let startX = 0
let pressed = false
let scrollLeftCurr = 0

blogList.addEventListener('mousedown', function (e) {
	e.preventDefault()

	pressed = true
	startX = e.clientX
	scrollLeftCurr = this.scrollLeft

	this.style.cursor = 'grabbing'
})

blogList.addEventListener('mouseleave', mouseLeave)
window.addEventListener('mouseup', mouseLeave)

function mouseLeave() {
	pressed = false}