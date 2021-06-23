export class NPC {
    constructor() {
        this.x = 800;
        this.y = 300;
        const game = document.querySelector('game');
        this.element = document.createElement("npc1");
        game.appendChild(this.element);
    }
    update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=npc.js.map