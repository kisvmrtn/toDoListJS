import Todo from "./Todo.js"
import TodoInput from "./TodoInput.js";
import { TODOLIST } from "./todoList.js";

export default class Todos {
    #list=[]
    constructor(list, pElem, iPElem) {
        this.#list = list //lista amivel dolgozunk
        this.pElem = pElem; // HTML elem, teendők jelennek meg
        this.iPElem = iPElem; //input elem
        this.viewTodos();
        // this.viewInput();
        this.removeEvent();
        this.addEvent();
        this.changeState();
    }
    changeState() {
        // egyedi (state) esemenykezelo, atallitja a Todo-bol kapott index-nek a state értékét truera, (készre, zöld lesz)
        window.addEventListener("change", (event) => {
            this.#list[event.detail].state = true;
        })
    }
    removeEvent() {
        // egyedi (eltavolitas) esemenykezelo, eltavolitja a Todo-bol kapott indexet majd torli a HTML elembol
        window.addEventListener("remove", (event) => {
            console.log(event.detail);
            this.#list.splice(event.detail, 1);
            this.pElem.innerHTML = ""
            this.viewTodos()
        })
    }
    addEvent() {
        // egyedi (hozzaadas) esemenykezelo, felnyomja a listaba a megadott szoveget, es a keszseg allapotat ami alapbol false
        window.addEventListener("add", (event) => {
            console.log(event.detail);
            this.#list.push({ text: event.detail, state: false});
            this.pElem.innerHTML = ""
            this.viewTodos()
            console.log(TODOLIST)
        })
    }
    
    viewTodos() {
        // kilistazza az osszes Todo-t, ha az adott elemnek a state-je true akkor zoldre allitja, ez azert kell hogy ha hozzaadunk ujat akkor zold maradjon a kesz teendo
        for (let index = 0; index < this.#list.length; index++) {
            const element = this.#list[index].text;
            const todoInstance = new Todo(element, this.pElem, index) //Todo peldanyositas
            if (this.#list[index].state === true) {
                todoInstance.textElem.style.color = "green";
            }
        }
    }
    
}