import {Module} from '../core/module'

export class ClicksModule extends Module {
	constructor() {
		super('clicks', `Такст в меню`) 
		
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