import {Module} from '../core/module'

export class TranslateModule extends Module {
	constructor() {
		super('translate', `Такст в меню`) 
		
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