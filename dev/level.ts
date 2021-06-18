import { PlayerCharacter } from "./playercharacter.js"
import { UI } from "./ui.js"
import { Houses } from "./houses.js"
import { NPC } from "./npc.js"


class Level {
    private playerCharacter : PlayerCharacter
    private npc : NPC
    hit : boolean
    paused : boolean

    constructor(){
        this.playerCharacter = new PlayerCharacter()
        this.npc = new NPC()
        this.paused = false

        this.playerCharacter.update()
        this.gameLoop()
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    gameLoop() {
        this.playerCharacter.update()
        this.hit = this.checkCollision(this.playerCharacter.getRectangle(), this.npc.getRectangle())
        if (this.hit) {
            console.log("laat hier de popup komen met letter en uitspreek zooi")
        }
        if ( !this.paused ) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }
}

new Level()