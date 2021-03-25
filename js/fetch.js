const url_best_movie = "http://localhost:8000/api/v1/titles/?sort_by&sort_by=-imdb_score"
const url_action_movie = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score"
const url_drama_movie = "http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score"
const url_animation_movie = "http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score"


let best_movie = []
let best_action_movies = []
let best_drama_movies = []
let best_animation_movies = []




function ajax(url, number=7) {
	fetch(url)
	    .then(res => {
		    if(res.ok){
			    res.json().then(data => {
				    console.log("ok")
				    if (number=7) {
				    	for(let number = 0; number < 5; number++) {
				    		console.log(data.results[number])
				    	}
				    	fetch(data.next)
				    	    .then(res => {
				    	    	if(res.ok){
				    	    		res.json().then(data => {
				    	    			console.log('ok part 2')
				    	    			for (let number = 0; number<2; number++ ) {
				    	    				console.log(data.results[number])
				    	    			}

				    	    		})
				    	    	} else {
				    	    		console.log("Erreur part 2")
				    	    	}
				    	    })
				    } else {
				    	console.log("best movie TODO")
				    }

			    })
		    } else {
			    console.log("erreur")
		    }
	    })
}
	

ajax(url_action_movie)

/*
function get_url(url, number=7) {
	fetch(url)
	.then(res => res.json())
	.then(data => console.log(data.results))
    


}


get_url(url_animation_movie)
*/
/*
for (let pas = 0; pas < 5; pas++) {
	fetch(url_animation_movie)
	.then(res => res.json())
	.then(data => console.log(data.results))
	fetch(data.next)
	.then(res => res.json())
	.then(data1 => console.log(data1.results))
}
*/









/*
Gérer les erreurs

then(res => {
	if (res.ok){
	   res.json().then(data => {
	       console.log("OK")
	   })
	} else {
	    console.log("erreur")
	    document.getElementByTagName(header).innerHTML = "erreur";
	}


})



*/




/*
Remplacer une image 

const img = document.getElementById('image1')
console.log(img)

fetch('http://localhost:8000/api/v1/titles/8571428')
    .then(res => res.json())
    .then(data => img.src = data.image_url)
    
  
 */ 
    
  
   