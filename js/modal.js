const openModal = function (e) {
	e.preventDefault()
	const target = document.querySelector(e.target.getAttribute('src'))
	alert(target)
}
	

document.querySelectorAll('#image-action-1').forEach(a => {
	a.addEventListener('click', openModal)
})
