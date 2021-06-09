export class Houses {
    constructor() {
        this.x = 130;
        this.y = 300;
        const game = document.querySelector('game');
        this.element = document.createElement("house1");
        game.appendChild(this.element);
    }
    update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=houses.js.map