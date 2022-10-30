import {Module} from '../core/module.js';
import renderPickUpPumpkins from '../pupgame/modules/renderPickUpPumpkins.js';
import renderScore from '../pupgame/modules/utils/RenderScore.js';
import startPlay from '../pupgame/modules/utils/StartPlay.js';
import * as Playground from '../pupgame/modules/Playground.js';
import Pumpkin from '../pupgame/modules/Pumpkin.js';
import Hero from '../pupgame/modules/Hero.js';
import Stones from '../pupgame/modules/Stones.js';
import gameOver from '../pupgame/modules/utils/GameOver.js';
import stopPlay from '../pupgame/modules/utils/StopPlay.js';
import { pumpkinSpeaks } from '../app.js';



export default class PupGame extends Module {
	constructor() {
		super('pupGame', `Игра "Собери тыквы"`) 
		
	}

	trigger() {
		let isOpen = false;
		document.addEventListener('click', (event) => {	
			if (event.target.dataset.type === this.type && !isOpen) {
				clearInterval(pumpkinSpeaks);
				const menuItems = document.querySelectorAll('.menu-item');
				for (let i = 1; i < menuItems.length; i++) {
					menuItems[i].remove();
				}
				isOpen = true;
    renderPickUpPumpkins();
		const startPlayBtn = document.querySelector('#t-start-play-btn');
		startPlayBtn.addEventListener('click', startPlay);
		const gameScreenContainer = document.querySelector('#t-game');
		gameScreenContainer.append(Playground.gameScreenHTML());
		let isFinded = false;
		let score = 0;
		renderScore('#t-score', score);
			
		for (let i=1; i < 40; i++) {
			const stone = new Stones;
			stone.render();
			}
			
			const ghost = new Hero;
			ghost.render();
			
			let pumpkin = new Pumpkin;
			pumpkin.render();
	
			let searchPumpkin = setInterval(findPumpkin, ghost.currentSpeed);
			

document.addEventListener('keyup',setDirection)

function setDirection(event) {
	if (event.key === 'ArrowRight') {
		event.preventDefault();
		ghost.checkDirection('right');
	}
	if (event.key === 'ArrowDown') {
		event.preventDefault();
		ghost.checkDirection('down');
	}
	if (event.key === 'ArrowUp') {
		event.preventDefault();
		ghost.checkDirection('up');
	}
	if (event.key === 'ArrowLeft') {
		event.preventDefault();
		ghost.checkDirection('left');
	}
}

function findPumpkin() {
	if ((ghost.currentPositionX() >= (pumpkin.currentPositionX()-60) && ghost.currentPositionX() <= (pumpkin.currentPositionX()+60)) && (ghost.currentPositionY() >= (pumpkin.currentPositionY()-60) && ghost.currentPositionY() <= (pumpkin.currentPositionY()+60)) ) {
		console.log(isFinded);
		pumpkin.remove();
		score += 10;
		isFinded = true;
		ghost.increaseSpeed();
		stopSearching();
		renderScore('#t-score', score);
	}
	
	if (ghost.currentPositionX() < -60 || ghost.currentPositionY() < 0 || ghost.currentPositionX() > 510 || ghost.currentPositionY() > 1160) {
		ghost.dead();
		gameOver(setDirection, stopPlay, score);
		clearInterval(searchPumpkin);
		}
}

function stopSearching() {
	if (isFinded) {
		clearInterval(searchPumpkin);
		setTimeout( () => {
			searchPumpkin = setInterval(findPumpkin, 100);
		}, (ghost.currentSpeed*4));
		pumpkin = new Pumpkin;
		pumpkin.render();
	}
}

	}
})
	}
}
