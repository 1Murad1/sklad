const header = document.querySelector('header_wrap')

function handleScroll() {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop

	if (scrollTop > 0) {
		header.classList.add('scrolled')
	} else {
		header.classList.remove('scrolled')
	}
}

window.addEventListener('scroll', handleScroll)

handleScroll()
