import { Menu } from './core/menu.js'

export default class ContextMenu extends Menu {
	constructor(selector) {
		super(selector)
		this.menu = document.querySelector('.menu');
		document.body.addEventListener('click', (event) => {
			if (event.target.offsetParent !== this.menu) {
				this.close();
			}
		})
	}

	open(event) {
		this.menu.style.top = `${event.clientY}px`;
		this.menu.style.left = `${event.clientX}px`;
		this.menu.style.display = 'block';
	}

	close() {
		this.menu.style.display = 'none';

	}

	add(module) {
		this.menu.innerHTML += module.toHTML();

	}
}
