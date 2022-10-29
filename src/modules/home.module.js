import {Module} from '../core/module'

export default class Home extends Module {
	constructor() {
		super('home', `Вернуться на главную`) 
		
	}

	trigger() {
		document.addEventListener('click', (event) => {	
			console.log(event.target.dataset.type)
			if (event.target.dataset.type === this.type) {
				window.location.reload();
			}
		})
	}
}