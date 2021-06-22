import { PlayerCharacter } from "./playercharacter.js"
import { UI } from "./ui.js"
import { Houses } from "./houses.js"

class Game {
    private playerCharacter : PlayerCharacter
    private ui : UI
    private houses : Houses
    hit : boolean
    paused : boolean

    constructor(){
        this.houses = new Houses()
        this.playerCharacter = new PlayerCharacter()
        this.ui = new UI()
        this.paused = false

        this.houses.update()
        this.playerCharacter.update()
        this.ui.update()
        this.gameLoop()
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    gameLoop() {
        this.ui.update()
        this.playerCharacter.update()
        this.hit = this.checkCollision(this.playerCharacter.getRectangle(), this.houses.getRectangle())
        if (this.hit && this.playerCharacter.spacePressed) {
            console.log("start level!")
            window.location.href="../docs/level1.html"
        }
        if ( !this.paused ) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }
}

new Game()