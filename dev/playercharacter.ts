export class PlayerCharacter {
    private element : HTMLElement
    private xspeed : number = 0
    private yspeed : number = 0
    private x : number = 40
    private y : number = 120

    constructor(){
        const game = document.querySelector('game') as HTMLElement
        this.element = document.createElement("playercharacter")
        game.appendChild(this.element)
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
    }

    public update(): void {
        this.x += this.xspeed
        this.y += this.yspeed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT" :
                this.xspeed = -5
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 5
                break
            case "W":
            case "ARROWUP" :
                this.yspeed = -5
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "D":
            case "ARROWLEFT" :
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }
}