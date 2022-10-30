import { Module } from '../../core/module'
import { clearScreen } from '../../utils.js';

export default class HomeModule extends Module {
	constructor() {
		super('home', `Вернуться на главную`)
	}

	trigger() {
		document.addEventListener('click', (event) => {
			if (event.target.dataset.type === this.type) {
				clearScreen()
			}
		})
	}
}