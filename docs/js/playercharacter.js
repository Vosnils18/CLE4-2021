export class PlayerCharacter {
    constructor() {
        this.xspeed = 0;
        this.yspeed = 0;
        this.x = 40;
        this.y = 120;
        this.tempX = 0;
        this.tempY = 0;
        const game = document.querySelector('game');
        this.element = document.createElement("playercharacter");
        game.appendChild(this.element);
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    getBoundingRect() {
        return this.element.getBoundingClientRect();
    }
    update() {
        this.tempX = this.x + this.xspeed;
        this.tempY = this.y + this.yspeed;
        if (this.tempX < 0 || this.tempX > window.innerWidth - this.element.clientWidth) {
            this.xspeed = 0;
        }
        else {
            this.x += this.xspeed;
        }
        if (this.tempY < 0 || this.tempY > window.innerHeight - this.element.clientHeight) {
            this.yspeed = 0;
        }
        else {
            this.y += this.yspeed;
        }
        console.log(this.element.clientWidth);
        console.log("test");
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
    onKeyDown(e) {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = -5;
                break;
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 5;
                break;
            case "W":
            case "ARROWUP":
                this.yspeed = -5;
                break;
            case "S":
            case "ARROWDOWN":
                this.yspeed = 5;
                break;
            case " ":
                this.spacePressed = true;
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
            case " ":
                this.spacePressed = false;
                break;
        }
    }
}
//# sourceMappingURL=playercharacter.js.map