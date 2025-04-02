export default class Todo {
    #text
    #index
    constructor(text, pElem, index) {
        this.#text = text;
        this.#index = index;
        this.pElem = pElem;
        this.view();
        this.textElem = document.querySelector(".text:last-child");
        this.OKELem = this.textElem.querySelector(".ready");
        this.deleteElem = this.textElem.querySelector(".delete:last-child")
        this.eventListeners();
        this.remEventListener();
    }
    view() {
        let html = `<p class = text>${this.#text}
                    <button class="ready">✅</button>
                    <button class="delete">❌</button>
                    </p>`
        this.pElem.insertAdjacentHTML("beforeend", html);
    }
    eventListeners() {
        this.OKELem.addEventListener("click", () => {
            this.textElem.style.color="green"
            const stateChange = new CustomEvent("change", { detail: this.#index})
            window.dispatchEvent(stateChange)
        })
    }
    remEventListener() {
        this.deleteElem.addEventListener("click", () => {
            const removeEvent = new CustomEvent("remove", { detail: this.#index });
            window.dispatchEvent(removeEvent);
        })
    }
}