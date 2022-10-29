import {Module} from '../core/module'

export class BackgroundModule extends Module {
	constructor() {
		super('background', `Такст в меню`) 
		
	}

	trigger() {
		document.addEventListener('click', (event) => {	
			console.log(event.target.dataset.type)
			if (event.target.dataset.type === this.type) {
				// ваш код тут
			}
		})
	}
}