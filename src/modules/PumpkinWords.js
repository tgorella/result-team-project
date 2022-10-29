
export default class Word {
	constructor() {
		this.positionX = Math.floor(Math.random() * 540);
    this.positionY = Math.floor(Math.random() * 1200);
		this.wordContainer = document.createElement('div');
		this.wordContainer.className = 't-words-container';
		document.body.append(this.wordContainer);
		this.message = document.createElement('div');
		this.id = Math.random()*10;
		this.wordContainer.id = this.id;
		this.word = [ 'нажми', 'правую','кнопку', 'мыши'];

	}

	render(x=this.positionX, y=this.positionY) {
	
	const num = Math.floor(Math.random() * 4);
	this.message.className = 't-words';
	this.message.innerText = this.word[num];
	this.message.style.top = `${this.positionX}px`;
	this.message.style.left = `${this.positionY}px`;
	this.wordContainer.append( this.message);
	}

	renderBoo(x=this.positionX, y=this.positionY) {
	
		const num = Math.floor(Math.random() * 4);
		this.message.className = 't-words-black';
		this.message.innerText = 'Booooo!';
		this.message.style.top = `${this.positionX}px`;
		this.message.style.left = `${this.positionY}px`;
		this.wordContainer.append( this.message);
		}

	remove() {
		document.getElementById(this.id).remove();
	}
}