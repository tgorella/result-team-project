import WELCOME_IMG from '../../../assets/pupgame/welcome-img.webp';
import AUDIO from '../../../assets/pupgame/HalloweenTheme.mp3';

export default function renderPickUpPumpkins() {
	const gameContainer = document.createElement('div');
	gameContainer.id = 't-gameContainer';
	const audio = document.createElement('audio');
	audio.src = AUDIO;
	audio.autoplay = 'true';
	const welcomeSection = document.createElement('section');
	welcomeSection.id = 't-welcome';
	const welcomeImg = document.createElement('img');
	welcomeImg.src = WELCOME_IMG;
	welcomeImg.alt = 'Pick Up Pumpkins';
	const welcomeHeader = document.createElement('h1');
	welcomeHeader.innerHTML = `Welcome to<br>Pick Up Pumpkins`;
	const welcomeInstructions = document.createElement('div');
	welcomeInstructions.className = 't-instructions';
	welcomeInstructions.innerHTML = `
<div class="">Перемещайся по полю, меняя направление движения с помощью стрелок на клавиатуре.</div>
	<div class="">Собери как можно больше тыкв. Только учти, что с каждой подобранной тыквой твоя скорость увеличивается.</div>
	<div class="">Постарайся не врезаться в границы поля - на этом закончится твоя игра.</div>
	<div class="">Игра начнется как только ты нажмешь на любую стрелку на клавиатуре. Но сначала жми кнопку "Играть".</div>
`;
	const startButton = document.createElement('button');
	startButton.className = 't-play-btn';
	startButton.id = 't-start-play-btn';
	startButton.innerText = 'Играть';

	const playSection = document.createElement('section');
	playSection.id = 't-game';

	const endGameSection = document.createElement('section');
	endGameSection.id = 't-game-over';

	welcomeSection.append(welcomeImg, welcomeHeader, welcomeInstructions, startButton);
	gameContainer.append(audio, welcomeSection, playSection, endGameSection);
	document.body.append(gameContainer);
}