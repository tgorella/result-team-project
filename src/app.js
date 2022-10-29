import './styles.css';
import ContextMenu from './menu.js';
import PupGame from './modules/pupGame.module.js';
import Home from './modules/home.module.js';
import Word from './modules/PumpkinWords.js';
import Answers from './modules/answer.module.js';

setInterval(generateWords, 2000);

function generateWords() {
	const word = new Word;
word.render();
setTimeout( () => {
	word.remove()
}, 4000)
}

// создаем объект класса модуля

const contextMenu = new ContextMenu;
const pupGame = new PupGame;
const home = new Home;
const answer = new Answers;

// добавляем модуль в контекстное меню

contextMenu.add(home);
contextMenu.add(pupGame);
contextMenu.add(answer);

// запускаем тригер, который активирует наш модуль при клике в меню
home.trigger();
pupGame.trigger();
answer.trigger();

document.addEventListener('contextmenu', (event) => {
	event.preventDefault();
		contextMenu.open(event)
	
		for ( let i = 0; i <5; i++) {
			const word = new Word;
	word.renderBoo();
	setTimeout( () => {
	word.remove()
}, 4000)
	}
})
