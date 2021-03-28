
function upload(target){
	console.log(target)

	fetch(target)
	   .then(res => {
	   	if(res.ok){
	   		res.json().then(data => {
	   			console.log(data.id)
	   			const title = document.getElementById('modal_title')
	   			const img = document.getElementById('modale_img2')
	   			const description = document.getElementById('modal_description')
	   			title.innerHTML = '<h2>' + data.title +'</h2>'
	   			img.setAttribute("src", data.image_url)
	   			description.innerHTML = '<a>' + data.description + '<a>'

	   			
	   		})
	   	}
	   })
	

	const close = document.getElementById('close')
    close.addEventListener('click', event => {
    	const modal_display = document.getElementById('modal')
        modal_display.setAttribute('style', 'display:none;')

    })


}




const openModal = function (e) {
	e.preventDefault()
    console.log(e.currentTarget)
	const target = e.currentTarget.getAttribute('href')
    const modal_display = document.getElementById('modal')
    modal_display.removeAttribute('style')
    upload (target)

}
	

document.querySelectorAll('img, .mg_movie').forEach(a => {
	a.addEventListener('click', openModal)
})