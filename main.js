import Todo from "./Todo.js";
import TodoInput from "./TodoInput.js";
import { TODOLIST } from "./todoList.js";
import Todos from "./Todos.js";


let text = document.querySelector('#todoInput');
let pElem = document.querySelector('section')
let inputElem = document.querySelector('.asd')
console.log(text)
new TodoInput(inputElem)
new Todos(TODOLIST,pElem, text)
