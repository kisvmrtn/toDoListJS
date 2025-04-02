import Todo from "./Todo.js"
import TodoInput from "./TodoInput.js";
import { TODOLIST } from "./todoList.js";

export default class Todos {
    #list=[]
    constructor(list, pElem, iPElem) {
        this.#list = list
        this.pElem = pElem;
        this.iPElem = iPElem;
        this.viewTodos();
        // this.viewInput();
        this.removeEvent();
        this.addEvent();
        this.changeState();
    }
    changeState() {
        window.addEventListener("change", (event) => {
            this.#list[event.detail].state = true;
        })
    }
    removeEvent() {
        window.addEventListener("remove", (event) => {
            console.log(event.detail);
            this.#list.splice(event.detail, 1);
            this.pElem.innerHTML = ""
            this.viewTodos()
        })
    }
    addEvent() {
        window.addEventListener("add", (event) => {
            console.log(event.detail);
            this.#list.push({ text: event.detail, state: false});
            this.pElem.innerHTML = ""
            this.viewTodos()
            console.log(TODOLIST)
        })
    }
    
    viewTodos() {
        for (let index = 0; index < this.#list.length; index++) {
            const element = this.#list[index].text;
            const todoInstance = new Todo(element, this.pElem, index)
            if (this.#list[index].state === true) {
                todoInstance.textElem.style.color = "green";
            }
        }
    }
    
}