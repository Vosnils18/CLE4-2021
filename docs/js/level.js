import { PlayerCharacter } from "./playercharacter.js";
import { UI } from "./ui.js";
import { Houses } from "./houses.js";
class Level {
    constructor() {
        this.houses = new Houses();
        this.playerCharacter = new PlayerCharacter();
        this.ui = new UI();
        this.paused = false;
        this.houses.update();
        this.playerCharacter.update();
        this.ui.update();
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
        if (!this.paused) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
}
new Level();
//# sourceMappingURL=level.js.map