export class PlayerCharacter {
    constructor() {
        this.xspeed = 0;
        this.yspeed = 0;
        this.x = 40;
        this.y = 120;
        const game = document.querySelector('game');
        this.element = document.createElement("playercharacter");
        game.appendChild(this.element);
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    onKeyDown(e) {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = -10;
                break;
            case "D":
            case "ARROWRIGHT":
                console.log(e);
                this.xspeed = 10;
                break;
            case "W":
            case "ARROWUP":
                console.log(e);
                this.yspeed = -10;
                break;
            case "S":
            case "ARROWDOWN":
                console.log(e);
                this.yspeed = 10;
                break;
        }
    }
    onKeyUp(e) {
        switch (e.key.toUpperCase()) {
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0;
                break;
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0;
                break;
        }
    }
}
//# sourceMappingURL=playercharacter.js.map