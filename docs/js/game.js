import { PlayerCharacter } from "./playercharacter.js";
import { UI } from "./ui.js";
class Game {
    constructor() {
        this.ui = new UI();
        this.playerCharacter = new PlayerCharacter();
        this.paused = false;
        this.playerCharacter.update();
        this.ui.update();
        this.gameLoop();
    }
    gameLoop() {
        this.ui.update();
        this.playerCharacter.update();
        if (!this.paused) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map