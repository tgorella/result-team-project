import './styles.css';
import ContextMenu from './menu.js';
import PupGame from './modules/pupGame.module.js';
import Home from './modules/home.module';

const contextMenu = new ContextMenu;
const pupGame = new PupGame;
const home = new Home;
contextMenu.add(home);
contextMenu.add(pupGame);
pupGame.trigger();

document.addEventListener('contextmenu', (event) => {
		event.preventDefault();
		contextMenu.open(event)
})

// pumpkins game code start


	// pumpkins game code end

