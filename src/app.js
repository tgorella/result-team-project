import './styles.css'
import ContextMenu from './menu.js'
import PupGame from './modules/pupGame.module.js'
import Home from './modules/home.module.js'
import Word from './modules/PumpkinWords.js'
import Answers from './modules/answer.module.js'
import BackgroundModule from './modules/background.module'

export const pumpkinSpeaks = setInterval(generateWords, 2000);

function generateWords() {
  const word = new Word()
  word.render()
  setTimeout(() => {
    word.remove()
  }, 4000)
}

// создаем объект класса модуля

const contextMenu = new ContextMenu()
const pupGame = new PupGame()
const home = new Home()
const answer = new Answers()
const backgroundModule = new BackgroundModule()

// добавляем модуль в контекстное меню

contextMenu.add(home)
contextMenu.add(pupGame)
contextMenu.add(answer)
contextMenu.add(backgroundModule)

// запускаем тригер, который активирует наш модуль при клике в меню
home.trigger()
pupGame.trigger()
answer.trigger()
backgroundModule.trigger()

document.addEventListener('contextmenu', (event) => {
  event.preventDefault()
  contextMenu.open(event)

  for (let i = 0; i < 5; i++) {
    const word = new Word()
    word.renderBoo()
    setTimeout(() => {
      word.remove()
    }, 4000)
  }
})
