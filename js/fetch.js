const url_best_movie = "http://localhost:8000/api/v1/titles/?sort_by&sort_by=-imdb_score"
const url_action_movie = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score"
const url_drama_movie = "http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score"
const url_animation_movie = "http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score"


function ajax(url, div, number) {

	fetch(url)
	    .then(res => {
		    if(res.ok){
			    res.json().then(data => {
				    /*If we need 7 feelback movies*/
				    if (number==7) {
				    	for(let first_loop = 0; first_loop < 5; first_loop ++) {
				    		document.getElementById(div +(first_loop + 1)).setAttribute("src", data.results[first_loop].image_url)			    	
				    	}
				    	fetch(data.next)
				    	    .then(res => {
				    	    	if(res.ok){
				    	    		res.json().then(data => {
				    	    		
				    	    			for (let second_loop = 0; second_loop<2; second_loop++ ) {
				    	    				document.getElementById(div +(second_loop + 6)).setAttribute("src", data.results[second_loop].image_url)				    		                
				    	    			}
				    	    		})
				    	    	} else {
				    	    		console.log("Erreur part 2")
				    	    	}
				    	    })
				    } else {

				    	/* Second part, if only one movie */
				    	document.getElementById(div).setAttribute("src", data.results[0].image_url)
				        document.getElementById("title_best_movies").innerHTML = data.results[0].title
				        fetch(data.results[0].url)
				            .then(res =>{
				            	if (res.ok){
				            		res.json().then(data=> {
				                        document.getElementById("description_text").innerText = data.description
				            		})
				            	}else {
				            	console.log("pas ok")
				                }
				            }) 
				    }

			    })
		    } else {
			    console.log("erreur")
		    }
	    })
}
	

ajax(url_best_movie, 'image_best', 1)
ajax(url_action_movie, 'image-action-', 7)
ajax(url_drama_movie, 'image-drama-', 7)
ajax(url_animation_movie, 'image-animation-', 7)
