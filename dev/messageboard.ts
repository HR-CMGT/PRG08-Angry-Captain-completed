class MessageBoard extends HTMLElement{
    // Fields
    private static _instance : MessageBoard
    
    private messages : HTMLElement[] = []

    // Properties
    public static get instance() : MessageBoard{
        if(!MessageBoard._instance) MessageBoard._instance = new MessageBoard()
        return MessageBoard._instance
    }

    private constructor() {
        super()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)

        this.style.right = "10px"
        this.style.top   = "10px"
    }

    public showMessage() {
        console.log("show message")
    }

    public addMessage(text : string) {
        this.childNodes.forEach(c => c.remove())

        let message = document.createElement("message")
        this.messages.unshift(message)

        message.innerHTML = text

        for (const m of this.messages) {
            this.appendChild(m)    
        }
        
    }
}

window.customElements.define("messageboard-component", MessageBoard as any)