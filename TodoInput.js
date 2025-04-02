import { TODOLIST } from "./todoList.js";

export default class TodoInput {
    constructor(pElem) {
        this.pElem = pElem;
        this.view();
        this.textElem = document.querySelector("#inp");
        this.OKElem = document.querySelector("#OK");
        this.OKEventListener();
    }
    view() {
        let html = `<input type="text" id="inp" placeholder="add todo">
                    <button id="OK">OK</button>`;
        this.pElem.insertAdjacentHTML("beforeend", html);
    }
    OKEventListener() {
        this.OKElem.addEventListener("click", () => {
            console.log(this.textElem.value)
            const e = new CustomEvent("add", { detail: this.textElem.value });
            window.dispatchEvent(e);
        });
    }
}