import './styles.css';
import ContextMenu from './menu.js';
import PupGame from './modules/pupGame.module.js';


const contextMenu = new ContextMenu;
const pupGame = new PupGame;
contextMenu.add(pupGame);
pupGame.trigger();

document.addEventListener('contextmenu', (event) => {
		event.preventDefault();
		
		contextMenu.open(event)
})

// pumpkins game code start


	// pumpkins game code end

