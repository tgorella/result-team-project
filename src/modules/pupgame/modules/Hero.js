import GHOST_IMG from '../../../assets/pupgame//ghost-right.webp';
import GHOST_LEFT_IMG from '../../../assets/pupgame/ghost-left.webp'
import GHOST_DEAD from '../../../assets/pupgame/dead.webp'

export default class Hero {
	constructor() {
		this.direction = '';
		this.speed = 200;
		this.img = document.createElement('div');
		this.ghost = document.createElement('img');
		this.ghost.src = GHOST_IMG;
		this.ghost.className = 't-ghost-image';
		const shadow = document.createElement('div');
		shadow.className = 't-ghost-shadow';
		this.img.append(this.ghost, shadow);
		this.isDead = false;
		this.positionX = 30;
		this.positionY = 10;
		this.currentDirection;
	}

	render() {
		this.img.className = 't-ghost';
		this.img.style.top = `${this.positionX}px`;
		this.img.style.left = `${this.positionY}px`;
		const playground = document.querySelector('.t-playground')
		playground.append(this.img);
	}

	checkDirection(direction) {
		this.direction = direction;
		if (this.direction === 'right') {
			this.ghost.src = GHOST_IMG;
			clearInterval(this.currentDirection);
			this.currentDirection = setInterval(() => { this.move(0, 10) }, this.speed);
		}
		if (this.direction === 'left') {
			clearInterval(this.currentDirection);
			this.ghost.src = GHOST_LEFT_IMG;
			this.currentDirection = setInterval(() => { this.move(0, -10) }, this.speed);
		}
		if (this.direction === 'down') {
			clearInterval(this.currentDirection);
			this.currentDirection = setInterval(() => { this.move(10, 0) }, this.speed);
		}
		if (this.direction === 'up') {
			clearInterval(this.currentDirection);
			this.currentDirection = setInterval(() => { this.move(-10, 0) }, this.speed);
		}
	}

	move(x, y) {
		this.positionX += x;
		this.positionY += y;
		this.render()
	}

	currentPositionX() {
		return this.positionX;
	}

	currentPositionY() {
		return this.positionY;
	}
	increaseSpeed() {
		this.speed = this.speed * 0.9;
	}

	currentSpeed() {
		return this.currentSpeed;
	}

	dead() {
		clearInterval(this.currentDirection);
		this.ghost.src = GHOST_DEAD;
		this.img.classList.add('t-dead');
	}

}