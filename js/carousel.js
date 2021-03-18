class Carousel {
	/**
	* @param {HTMLElement} element
	* @param {objet} option
	* @param {objet} option.slidesToScroll Nombre d'éléments à faire défiler
	* @param {objet} option.slideVisible Nombre d'éléments Visble en même temps 
	*/
	constructor(element, options = {}) {
		this.element = element
		this.options = Object.assign({}, {
			slidesToScroll: 1,
			slideVisible: 3
		}, options)

		let children = [].slice.call(element.children)
		this.currentItem = 0
		this.root = this.createDivWithClass('carousel')
		this.container = this.createDivWithClass('carousel__container')
		this.root.appendChild(this.container)
		this.element.appendChild(this.root)
		this.items = children.map((child) => {
			let item = this.createDivWithClass('carousel__item')
			item.appendChild(child)
			this.container.appendChild(item)
			return item
		    })
		    this.setStyle()
		    this.createNavigation()
        }
  



	setStyle () {
    let ratio = this.items.length / this.options.slideVisible
    this.container.style.width = (ratio * 100) + "%"
    this.items.forEach(item => item.style.width = ((100 / this.options.slideVisible) /ratio) + "%")
    }


    createNavigation (){
    	let nextButton = this.createDivWithClass('carousel__next')
    	let prevButton = this.createDivWithClass('carousel__prev')
    	this.root.appendChild(nextButton)
    	this.root.appendChild(prevButton)

        nextButton.addEventListener("click", this.next.bind(this))
        prevButton.addEventListener("click", this.prev.bind(this))
    	

    }

    next (){
    	this.goToItem(this.currentItem + this.options.slidesToScroll)

    }
    
    prev() {
    	this.goToItem(this.currentItem - this.options.slidesToScroll)

    }

    goToItem (index) {
    	if (index < 0) {
    		index = this.items.length - this.options.slideVisible
    	} else if (index >= this.items || this.items[this.currentItem + this.options.slideVisible] === undefined) {
    	index = 0
        }
    	let translateX = index * -100 / this.items.length
    	this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
    	this.currentItem = index

    }

	/***
	* @param {string} className 
	* @returns {HTMLElement}
	*/

	createDivWithClass (className) {
		let div = document.createElement('div')
		div.setAttribute('class', className)
		return div

	}
}


new Carousel(document.querySelector('#carousel1'))




