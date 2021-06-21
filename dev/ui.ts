export class UI  {
    private ui: HTMLElement
    public textPrompt: HTMLElement

    constructor() {
        const game = document.querySelector('game') as HTMLElement
        
        this.ui = document.createElement("ui")
        game.appendChild(this.ui)

        this.textPrompt = document.createElement("textprompt")
        this.ui.appendChild(this.textPrompt)
        this.textPrompt.classList.add("-invis")
    }

    public update() {
    
    }
}