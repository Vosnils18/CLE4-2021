export class UI {
    constructor() {
        const game = document.querySelector('game');
        this.scoreField = document.createElement("ui");
        game.appendChild(this.scoreField);
    }
    update() {
        this.scoreField.innerHTML = `jesus is glad you are here`;
    }
}
//# sourceMappingURL=ui.js.map