export class UI  {
    private ui: HTMLElement
    public textPrompt: HTMLElement
    public modalContent : HTMLElement

    constructor() {
        const body = document.querySelector('body') as HTMLElement
        
        this.ui = document.createElement("ui")
        body.appendChild(this.ui)

        this.textPrompt = document.createElement("textprompt")
        this.textPrompt.classList.add("-invis")
        this.textPrompt.classList.add("modal")
        this.textPrompt.id = "modalBox"
        this.ui.appendChild(this.textPrompt)

        this.modalContent = document.createElement("div")
        this.modalContent.classList.add("modal-content")
        this.textPrompt.appendChild(this.modalContent)
    }

    public update() {
    
    }
}