export default function stopPlay(score) {
	const slide3 = document.querySelector('#t-game-over');
	slide3.innerHTML = '';
	const header = document.createElement('h2');
	header.innerText = 'GAME OVER';
	header.className = 't-red';
	slide3.style.top = '0px';
	const totalScore = document.createElement('h3');
	totalScore.innerText = 'Ваш счет: ' + score;
	const quitButton = document.createElement('button');
	quitButton.innerText = 'Выйти из игры';
	quitButton.className = 't-play-btn';
	slide3.append(header, totalScore, quitButton);
	quitButton.addEventListener('click', (event) => {
		window.location.reload();
	})
}