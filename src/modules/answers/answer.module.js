import { Module } from "../../core/module";
import { pumpkinSpeaks } from "../../app.js";
import { clearScreen } from "../../utils";

export default class AnswersModule extends Module {
  constructor() {
    super("answers", `Шар предсказаний`);
    this.wordContainer = document.createElement("div");
    this.wordContainer.className = "t-words-container";
    document.body.prepend(this.wordContainer);
    this.answer = document.createElement("div");
    this.id = Math.random() * 12;
    this.wordContainer.id = this.id;
  }

  trigger() {
    document.addEventListener("click", (event) => {
      if (event.target.dataset.type === this.type) {
        clearInterval(pumpkinSpeaks);
        clearScreen();

        clearInterval(pumpkinSpeaks);
        const menuItems = document.querySelectorAll(".menu-item");
        for (let i = 1; i < menuItems.length; i++) {
          menuItems[i].classList.add("hide");
        }

        const words = [
          "Бесспорно",
          "Предрешено",
          "Мой ответ — нет",
          "Определённо да",
          "Хорошие перспективы",
          "Да",
          "Спроси позже",
          "42",
          "Вероятнее всего",
          "Лучше не рассказывать",
          "Даже не думай",
          "Весьма сомнительно",
        ];

        const num = Math.floor(Math.random() * 12);
        const moduleContainer = document.createElement("div");
        moduleContainer.id = "t-crystallball";
        const ballTitle = document.createElement("div");
        ballTitle.className = "t-crystall-ball-title";
        ballTitle.innerText = "Задайте ваш вопрос и нажмите на кнопку";
        document.body.prepend(moduleContainer);

        const startButton = document.createElement("button");
        startButton.className = "t-answer-button";
        startButton.innerText = "Узнать ответ";
        moduleContainer.append(ballTitle, startButton);
        startButton.addEventListener("click", getAnswer);

        function getAnswer() {
          startButton.remove();
          const glow = document.createElement("div");
          glow.className = "t-crystal-glow";
          const ball = document.createElement("div");
          ball.className = "t-crystall-ball";
          const shadow = document.createElement("div");
          shadow.className = "t-crystall-ball-shadow";
          ballTitle.innerText = "Ответ на ваш вопрос:";
          const ballMessage = document.createElement("div");
          ballMessage.className = "t-crystall-ball-message";
          ballMessage.innerText = words[num];

          setTimeout(() => {
            moduleContainer.append(glow);
          }, 3000);
          setTimeout(() => {
            glow.append(ballMessage);
          }, 7000);

          document.body.prepend(moduleContainer);
          moduleContainer.append(ball, shadow);
        }
      }
    });
  }

  remove() {
    document.getElementById(this.id).remove();
  }
}
