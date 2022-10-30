export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function clearScreen() {
	const menuItems = document.querySelectorAll('.menu-item');
				for (let i = 1; i < menuItems.length; i++) {
					menuItems[i].classList.remove('hide');
				}
	if (document.querySelector("#t-crystallball")) {
		document.querySelector("#t-crystallball").remove();
	}
	if (document.querySelector("#t-gameContainer")) {
		window.location.reload();
	}
	if(document.querySelector("#particles-js")) {
		document.querySelector("#particles-js").remove()
		document.querySelector(".play-list").remove()
	}
}
