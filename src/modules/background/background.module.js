import "../background/styles.css";
import { Module } from "../../core/module.js";
import {
  background1,
  background2,
  background3,
} from "../background/backgrounds";
import track1 from "../../assets/background/audio/crywolf.mp3";
import track2 from "../../assets/background/audio/halloween-parade.mp3";
import track3 from "../../assets/background/audio/halloween.mp3";

export default class BackgroundModule extends Module {
  constructor() {
    super("background", "Tсс...");
    this.random = 0;
  }

  init() {
    if (!document.querySelector("#particles-js")) {
      const particlesJS = document.createElement("div");
      particlesJS.id = "particles-js";
      document.body.prepend(particlesJS);
    }
  }

  trigger() {
    document.addEventListener("click", (event) => {
      if (event.target.dataset.type === this.type) {
        const menuItems = document.querySelectorAll(".menu-item");
        for (let i = 1; i < menuItems.length; i++) {
          menuItems[i].classList.add("hide");
        }
        this.init();
        this.changeBG();
      } else if (
        event.target.dataset.type !== this.type &&
        event.target.dataset.type
      ) {
        const particlesJS = document.querySelector("#particles-js");
        if (particlesJS) {
          particlesJS.remove();
        }
      }
    });
  }

  changeBG() {
    const backgrounds = [background1, background2, background3];
    const tracks = [track1, track2, track3];
    const btnColors = ["white", "orange", "grey"];

    const playlist = document.createElement("div");
    playlist.className = "play-list";
    const audio = document.createElement("audio");
    audio.autoplay = "true";

    const neonBtn = document.createElement("a");
    neonBtn.href = "#";
    neonBtn.innerText = "Play";

    playlist.append(audio, neonBtn);
    document.body.prepend(playlist);

    const randomBG = () => {
      const particlesJS = document.querySelector("#particles-js");

      let random = Math.floor(Math.random() * backgrounds.length);
      if (random === this.random) {
        random = (random + 1) % 3;
      }
      this.random = random;
      switch (random) {
        case 0:
          particlesJS.style.backgroundColor = "#0d0223";
          break;
        case 1:
          particlesJS.style.backgroundColor = "#2d0d47";
          break;
        default:
          particlesJS.style.backgroundColor = "#000";
      }
      backgrounds[random]();
      audio.src = tracks[random];
      neonBtn.className = btnColors[random];
    };

    randomBG();

    neonBtn.addEventListener("click", () => {
      randomBG(backgrounds);
    });
  }
}
