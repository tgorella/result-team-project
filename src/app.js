import "./styles.css";
import ContextMenu from "./menu.js";
import Word from "./modules/home/home.words";
import HomeModule from "./modules/home/home.module";
import BackgroundModule from "./modules/background/background.module";
import AnswersModule from "./modules/answers/answer.module";
import PupgameModule from "./modules/pupgame/pupGame.module";
import TranslateModule from "./modules/translator/translator.module";

export const pumpkinSpeaks = setInterval(generateWords, 2000);

function generateWords() {
  const word = new Word();
  word.render();
  setTimeout(() => {
    word.remove();
  }, 4000);
}

const contextMenu = new ContextMenu();
const homeModule = new HomeModule();
const backgroundModule = new BackgroundModule();
const answersModule = new AnswersModule();
const pupgameModule = new PupgameModule();
const translatorModule = new TranslateModule();

contextMenu.add(homeModule);
contextMenu.add(pupgameModule);
contextMenu.add(answersModule);
contextMenu.add(backgroundModule);
contextMenu.add(translatorModule);

homeModule.trigger();
backgroundModule.trigger();
answersModule.trigger();
pupgameModule.trigger();
translatorModule.trigger();

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open(event);
});
