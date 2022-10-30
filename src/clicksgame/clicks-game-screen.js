import { potions } from "./potions"

function getRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

export function createGameBoard() {  
    potions.forEach(element => {
        const potion = document.createElement("img")
        const board = document.querySelector(".d-board")

        potion.classList.add("d-potion")
        potion.src = `${element.url}`
        potion.id = `${element.id}`

        board.append(potion)
    })  
}

export function createGameConditions() {
    const findThisPotionNumber = getRandom(0, potions.length-1)
    const findThisPotion = potions[findThisPotionNumber]
    const condition = document.querySelector(".d-condition")
    
    const potionCondition = document.createElement("img")
    potionCondition.classList.add("d-potion-example")
    potionCondition.src = `${findThisPotion.url}`
    potionCondition.id = `${findThisPotion.id}`
    
    condition.append(potionCondition)
}
