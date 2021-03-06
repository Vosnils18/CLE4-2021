import { PlayerCharacter } from "./playercharacter.js";
import { UI } from "./ui.js";
import { NPC } from "./npc.js";
let label = "waiting...";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/CUPka7Kfn/';
class Level {
    constructor() {
        this.playerCharacter = new PlayerCharacter();
        this.npc = new NPC();
        this.ui = new UI();
        this.paused = false;
        this.playerCharacter.update();
        this.npc.update();
        this.ui.update();
        this.gameLoop();
    }
    preload() {
        classifier = ml5.soundClassifier(modelURL + 'model.json');
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    gameLoop() {
        this.playerCharacter.update();
        this.npc.update();
        this.ui.update();
        this.hit = this.checkCollision(this.playerCharacter.getRectangle(), this.npc.getRectangle());
        if (this.hit) {
            console.log("laat hier de popup komen met letter en uitspreek zooi");
            this.ui.textPrompt.classList.remove("-invis");
            this.paused = true;
            this.ui.modalContent.innerText = "m";
        }
        if (!this.paused) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
}
new Level();
//# sourceMappingURL=level.js.map