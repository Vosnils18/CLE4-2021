export class NPC {
    private element : HTMLElement
    private x : number = 130
    private y : number = 300

    constructor(){
        const game = document.querySelector('game') as HTMLElement
        this.element = document.createElement("npc1")
        game.appendChild(this.element)
    }

    public update(): void {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
}