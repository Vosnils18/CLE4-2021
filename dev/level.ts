import { PlayerCharacter } from "./playercharacter.js"
import { UI } from "./ui.js"
import { Houses } from "./houses.js"
import { NPC } from "./npc.js"


class Level {
    private playerCharacter : PlayerCharacter
    private npc : NPC
    private ui : UI
    hit : boolean
    paused : boolean

    constructor(){
        this.playerCharacter = new PlayerCharacter()
        this.npc = new NPC()
        this.ui = new UI()
        this.paused = false

        this.playerCharacter.update()
        this.npc.update()
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
        this.playerCharacter.update()
        this.npc.update()
        this.ui.update()
        
        // collision check
        this.hit = this.checkCollision(this.playerCharacter.getRectangle(), this.npc.getRectangle())
        if (this.hit) {
            console.log("laat hier de popup komen met letter en uitspreek zooi")

        }

        // pause check
        if ( !this.paused ) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }
}

new Level()