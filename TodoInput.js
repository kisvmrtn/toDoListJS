import { TODOLIST } from "./todoList.js";

export default class TodoInput {
    constructor(pElem) {
        this.pElem = pElem; // HTML elem
        this.view();
        this.textElem = document.querySelector("#inp"); //input elem
        this.OKElem = document.querySelector("#OK"); //OK gomb
        this.OKEventListener();
    }
    view() {
        // html elem letrehoz., egy input elem OK gombbal amit a pElemhez adunk
        let html = `<input type="text" id="inp" placeholder="add todo">
                    <button id="OK">OK</button>`;
        this.pElem.insertAdjacentHTML("beforeend", html);
    }
    // OK gomb, click esemenykezelovel, sajat esemenyt hoz letre az "add"-ot majd tovabbkuldi
    OKEventListener() {
        this.OKElem.addEventListener("click", () => {
            console.log(this.textElem.value)
            const e = new CustomEvent("add", { detail: this.textElem.value });
            window.dispatchEvent(e);
        });
    }
}