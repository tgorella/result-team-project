import {Module} from '../core/module'

export default class Home extends Module {
	constructor() {
		super('home', `Вернуться на главную`) 
		
	}

	trigger() {
		document.addEventListener('click', (event) => {	
			if (event.target.dataset.type === this.type) {
				console.log('домой!')
				window.location.reload();
			}
		})
	}
}