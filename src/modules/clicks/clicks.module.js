import {
  createGameBoard,
  createGameConditions,
  finishGame,
  refreshScore,
  score,
} from "./clicks-game-screen";
import { potions } from "./potions";
import renderClicksContainer from "./renderClicksContainer";
import { Module } from "../../core/module";
import frog from "../../assets/clicks/frog.png";
import pot from "../../assets/clicks/pot.png";
import hat from "../../assets/clicks/hat.png";

export default class ClicksModule extends Module {
  constructor() {
    super("clicks", `Игра Зельеварение`);
    this.time = 0;
    this.start = document.querySelector(".d-start-screen");
  }

  trigger() {
    let time = 0;
    let score = 0;

    document.addEventListener("click", (event) => {
      if (event.target.dataset.type === this.type) {
        const menuItems = document.querySelectorAll(".menu-item");
        for (let i = 1; i < menuItems.length; i++) {
          menuItems[i].classList.add("hide");
        }
        renderClicksContainer();

        const timeList = document.querySelector(".d-time-list");
        timeList.addEventListener("click", (event) => {
          if (event.target.classList.contains("d-time-btn")) {
            time = parseInt(event.target.dataset.time);

            const screen1 = document.querySelector(".d-start-screen");
            screen1.remove();

            createGameBoard();
            createGameConditions();
            refreshScore();

            function decreaseTime() {
              const timeEl = document.querySelector("#d-time");

              if (time === 0) {
                finishGame();
              } else {
                let current = --time;

                if (current < 10) {
                  current = `0${current}`;
                }
                setTime(current);
              }
            }

            function setTime(value) {
              const timeEl = document.querySelector("#d-time");
              timeEl.innerHTML = `00:${value}`;
            }

            setInterval(decreaseTime, 1000);
            setTime(time);

            function refreshScore() {
              const myScore = document.querySelector(".d-score");

              if (score < 10) {
                myScore.innerText = `${score}`;
                myScore.style.color = "#DB6E5E";
              } else if (score >= 10 && score < 15) {
                myScore.innerText = `${score}`;
                myScore.style.color = "#DBAD5E";
              } else if (score > 15) {
                myScore.innerText = `${score}`;
                myScore.style.color = "#cbdb5e";
              }
            }

            const board = document.querySelector(".d-board");

            board.addEventListener("click", (event) => {
              const findThisPotion =
                document.querySelector(".d-potion-example");
              const condition = document.querySelector(".d-condition");

              if (event.target.id === findThisPotion.id) {
                score++;
                refreshScore();
                potions.sort(() => Math.random() - 0.5);
                board.innerHTML = "";
                createGameBoard();
                condition.innerHTML = "";
                createGameConditions();
              } else {
                const button = event.target.closest("img");

                if (button) {
                  event.target.style.background = "rgba(178, 29, 17, 0.50)";
                }
              }
            });
          }
        });

        function finishGame() {
          const screen2 = document.querySelector(".d-game-screen");
          screen2.remove();

          const result1 =
            "Увы! Ты не успел! Ведьма заметила твой план и превратила тебя в жабу...";
          const result2 =
            "Победа! Ты приготовил нужное зелье и выбрался из логова ведьмы.";
          const result3 =
            "Ого! В тебе проснулся настоящий талант и ты стал добрым волшебником. Ты победил злую ведьму и прогнал её из своего края.";

          const img1 = frog;
          const img2 = pot;
          const img3 = hat;

          const spanScore = document.querySelector(".d-result-score");
          const text = document.querySelector(".d-result-text");
          const img = document.querySelector(".d-magic-item__img");

          if (score < 10) {
            spanScore.innerText = score;
            text.innerText = result1;
            img.src = img1;
          } else if (score >= 10 && score < 15) {
            spanScore.innerText = score;
            text.innerText = result2;
            img.src = img2;
          } else if (score > 15) {
            spanScore.innerText = score;
            text.innerText = result3;
            img.src = img3;
          }
        }
      }
    });
  }
}
