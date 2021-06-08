import { PlayerCharacter } from "./playercharacter.js"
import { UI } from "./ui.js"

class Game {
    private playerCharacter : PlayerCharacter
    private ui : UI
    paused : boolean

    constructor(){
        this.ui = new UI()
        this.playerCharacter = new PlayerCharacter()
        this.paused = false

        this.playerCharacter.update()
        this.ui.update()
    }

    gameLoop() {
        this.ui.update()
        this.playerCharacter.update()
        if ( !this.paused ) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }
}

new Game()