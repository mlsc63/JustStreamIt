function upload(target){

	fetch(target)
	.then(res => {
		if(res.ok){
			res.json().then(data => {
				document.getElementById('modal_title').innerHTML = '<h2>' + data.title +'</h2>'
				document.getElementById('modal_img').setAttribute("src", data.image_url)
				document.getElementById('modal_abstract').innerHTML = '<a>' + data.long_description + '<a>'
				document.getElementById('modal_date').innerText = data.year 
				document.getElementById('modal_contry').innerText = data.countries 
				document.getElementById('modal_genres').innerText = data.genres 
				document.getElementById('modal_rated').innerText = data.rated 
				document.getElementById('modal_score_imdb').innerText = data.imdb_score 
				document.getElementById('modal_director').innerText = data.directors 
				document.getElementById('modal_actors').innerText = data.actors 
				document.getElementById('modal_duration').innerText = data.duration + " minutes" 
				document.getElementById('modal_resulat_box_office').innerText = data.worldwide_gross_income + ' ' + data.budget_currency 
			    
			})
		}
	})
	
	const close = document.getElementById('modal_close')
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
	modal_display.style = ('visibility: visible')
	upload (target)
}

document.querySelectorAll('img, .mg_movie').forEach(a => {
	a.addEventListener('click', openModal)
})