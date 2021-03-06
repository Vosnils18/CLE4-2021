import { PlayerCharacter } from "./playercharacter.js"
import { UI } from "./ui.js"
import { NPC } from "./npc.js"
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/CUPka7Kfn/';

class Level {
    private playerCharacter : PlayerCharacter
    public npc : NPC
    public ui : UI
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

    preload() {
        classifier = ml5.soundClassifier(modelURL + 'model.json')
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
            this.ui.textPrompt.classList.remove("-invis")
            this.paused = true
            this.ui.modalContent.innerText = "m"

        }

        // pause check
        if ( !this.paused ) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }
}

new Level()