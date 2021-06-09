import { PlayerCharacter } from "./playercharacter.js";
import { UI } from "./ui.js";
import { Houses } from "./houses.js";
class Game {
    constructor() {
        this.ui = new UI();
        this.playerCharacter = new PlayerCharacter();
        this.houses = new Houses();
        this.paused = false;
        this.playerCharacter.update();
        this.ui.update();
        this.houses.update();
        this.gameLoop();
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    gameLoop() {
        this.ui.update();
        this.playerCharacter.update();
        this.hit = this.checkCollision(this.playerCharacter.getRectangle(), this.houses.getRectangle());
        if (this.hit && this.playerCharacter.spacePressed) {
            console.log("start level!");
        }
        if (!this.paused) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map