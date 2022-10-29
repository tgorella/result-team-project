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
  }

  init() {
    if (!document.querySelector('#particles-js')) {
      const particlesJS = document.createElement('div')
      particlesJS.id = 'particles-js'
      document.body.append(particlesJS)
    }
  }

  destroy() {
    const particlesJS = document.querySelector('#particles-js')
    if (particlesJS) {
      document.body.remove(particlesJS)
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
        console.log('type', event.target.dataset.type)
        // this.destroy()
      }
    })
  }

  changeBG() {
    const backgrounds = [background1, background2, background3]
    const tracks = [
      './background/audio/crywolf.mp3',
      './background/audio/halloween-parade.mp3',
      './background/audio/halloween.mp3',
    ]
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

    randomBG()
    function randomBG() {
      const particlesJS = document.querySelector('#particles-js')

      let random = Math.floor(Math.random() * backgrounds.length)
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
      //   audio.src = tracks[random]
      neonBtn.className = btnColors[random]
    }

    neonBtn.addEventListener('click', () => {
      randomBG(backgrounds)
    })
  }
}
