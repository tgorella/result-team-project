import '../background/styles.css'

import { Module } from '../core/module'
import {
  background1,
  background2,
  background3,
} from '../background/backgrounds'

export default class BackgroundModule extends Module {
  constructor() {
    super('background', `Сменить фон`)
    this.random = 0
  }

  init() {
    if (!document.querySelector('#particles-js')) {
      const particlesJS = document.createElement('div')
      particlesJS.id = 'particles-js'
      document.body.append(particlesJS)
    }
  }

  trigger() {
    document.addEventListener('click', (event) => {
      console.log(event.target.dataset.type)
      if (event.target.dataset.type === this.type) {
        this.init()
        this.changeBG()
      } else if (
        event.target.dataset.type !== this.type &&
        event.target.dataset.type
      ) {
        const particlesJS = document.querySelector('#particles-js')
        if (particlesJS) {
          document.body.remove(particlesJS)
        }
      }
    })
  }

  changeBG() {
    const backgrounds = [background1, background2, background3]
    const tracks = ['/crywolf.mp3', '/halloween-parade.mp3', '/halloween.mp3']
    const btnColors = ['white', 'orange', 'grey']

    const playlist = document.createElement('div')
    playlist.className = 'play-list'
    const audio = document.createElement('audio')
    audio.autoplay = 'autoplay'

    const neonBtn = document.createElement('a')
    neonBtn.href = '#'
    neonBtn.innerText = 'Play'

    playlist.append(audio, neonBtn)
    document.body.append(playlist)

    const randomBG = () => {
      const particlesJS = document.querySelector('#particles-js')

      let random = Math.floor(Math.random() * backgrounds.length)
      if (random === this.random) {
        random = (random + 1) % 3
      }
      this.random = random
      switch (random) {
        case 0:
          particlesJS.style.backgroundColor = '#0d0223'
          break
        case 1:
          particlesJS.style.backgroundColor = '#2d0d47'
          break
        default:
          particlesJS.style.backgroundColor = '#000'
      }
      backgrounds[random]()
      audio.src = tracks[random]
      neonBtn.className = btnColors[random]
    }
    randomBG()

    neonBtn.addEventListener('click', () => {
      randomBG(backgrounds)
    })
  }
}
