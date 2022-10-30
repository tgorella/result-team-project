export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function clearScreen() {
	if (document.querySelector("#t-crystallball")) {
		document.querySelector("#t-crystallball").remove();
	}
	if(document.querySelector("#t-gameContainer")) {
		document.querySelector("#t-gameContainer").remove()
	}
	if(document.querySelector("#particles-js")) {
		document.querySelector("#particles-js").remove()
		document.querySelector(".play-list").remove()
	}
}