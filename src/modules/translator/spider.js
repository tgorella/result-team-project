import { random } from "../../utils";

import spider1 from "../../assets/translator/spider1.png";
import spider2 from "../../assets/translator/spider2.png";
import spider3 from "../../assets/translator/spider3.png";
import spider4 from "../../assets/translator/spider4.png";
import spider5 from "../../assets/translator/spider5.png";
import spider6 from "../../assets/translator/spider6.png";
import spider7 from "../../assets/translator/spider7.png";
import spider8 from "../../assets/translator/spider8.png";

const SpiderImages = [
  spider1,
  spider2,
  spider3,
  spider4,
  spider5,
  spider6,
  spider7,
  spider8,
];

export default class Spider {
  constructor(ctx) {
    this.webStartX = 0;
    this.webStartY = 0;
    this.x = 0;
    this.y = 0;
    this.defaultSpiderHalfSize = 101;
    this.spiderHalfSize = this.defaultSpiderHalfSize;
    this.startY = -200;
    this.scaleFactor = 1;
    this.currentImageIndex = 0;
    this.maxImageIndex = 8;
    this.images = [];
    this.ctx = ctx;

    for (let i = 0; i < this.maxImageIndex; i++) {
      const image = new Image();
      image.src = SpiderImages[i];
      this.images.push(image);
    }
    this.#initiate();
  }

  #initiate() {
    // Random spider parameters
    this.x = random(100, this.ctx.canvas.width - 200);
    this.y = this.webStartY = this.startY;
    this.scaleFactor = 0.5 + 0.1 * random(1, 4);
    this.spiderHalfSize = this.defaultSpiderHalfSize * this.scaleFactor;
    this.webStartX = this.x + this.spiderHalfSize;

    // Random tween parameters
    const goDownY = 100 + random(50, 100);
    const goDownSpeed = 1500 + random(500, 1500);

    const goUpY = this.startY;
    const goUpSpeed = 2500 + random(500, 1500);

    // Chain down and up animation, then try again
    createjs.Tween.get(this)
      .to({ y: goDownY }, goDownSpeed, createjs.Ease.getPowInOut(4))
      .to({ y: goUpY }, goUpSpeed, createjs.Ease.getPowInOut(2))
      .call(() => {
        this.#initiate();
      });
  }

  render() {
    // Draw web
    this.ctx.beginPath();
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.moveTo(this.webStartX, this.webStartY);
    this.ctx.lineTo(this.x + this.spiderHalfSize, this.y + this.spiderHalfSize);
    this.ctx.stroke();

    // Draw image
    const imageToDraw = this.images[this.currentImageIndex];
    this.ctx.drawImage(
      imageToDraw,
      this.x,
      this.y,
      imageToDraw.width * this.scaleFactor,
      imageToDraw.height * this.scaleFactor
    );

    // Change animation frame
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.maxImageIndex - 1) {
      this.currentImageIndex = 0;
    }
  }
}
