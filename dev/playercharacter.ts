export class PlayerCharacter {
    private element : HTMLElement
    private xspeed : number = 0
    private yspeed : number = 0
    private x : number = 40
    private y : number = 120
    private tempX : number = 0
    private tempY : number = 0
    public getBoundingRect() : DOMRect {
        return this.element.getBoundingClientRect()
    }

    constructor(){
        const game = document.querySelector('game') as HTMLElement
        this.element = document.createElement("playercharacter")
        game.appendChild(this.element)
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
    }

    public update(): void {
        this.tempX = this.x + this.xspeed
        this.tempY = this.y + this.yspeed

        if(this.tempX < 0  || this.tempX > window.innerWidth - this.element.clientWidth) {
            this.xspeed = 0
        } 
        else{
            this.x += this.xspeed
        }

        if(this.tempY < 0  || this.tempY > window.innerHeight - this.element.clientHeight) {
            this.yspeed = 0
        } 
        else{
            this.y += this.yspeed
        }

        console.log(this.element.clientWidth)
        console.log("test")
        

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