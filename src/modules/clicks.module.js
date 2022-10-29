// import { startGame } from '../clicksgame/clicks-game-screen'
import renderClicksContainer from '../clicksgame/renderClicksContainer'
import {Module} from '../core/module'

export default class ClicksModule extends Module {
	constructor() {
		super('clicks', `Игра зельеварение`)		
	}

	trigger() {
		let time = 0
		const game = document.querySelector(".d-game-screen")

		document.addEventListener('click', (event) => {	
			console.log(event.target.dataset.type)
			if (event.target.dataset.type === this.type) {
				renderClicksContainer()

				const timeList = document.querySelector(".d-time-list")
				timeList.addEventListener("mouseout", event => {
					if (event.target.classList.contains("d-time-btn")) {
					  time = parseInt(event.target.getAttribute("data-time"))

					  const prompts = document.querySelectorAll(".d-time-prompt");
					  prompts.forEach(element => element.style.opacity = "0");
					}
				})

				timeList.addEventListener("mouseover", event => {
					if (event.target.classList.contains("d-time-btn")) {
					  time = parseInt(event.target.getAttribute("data-time"))
					  
					  const prompt = document.querySelector(`#prompt-${time}`)
					  prompt.style.opacity = "1";
					}
				})

				timeList.addEventListener("click", event => {
					if (event.target.classList.contains("d-time-btn")) {
						time = parseInt(event.target.getAttribute("data-time"))

						console.log(game)

						// startGame()
					}
				})

			}
		})
	}
}