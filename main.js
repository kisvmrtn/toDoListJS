import Todo from "./Todo.js";
import TodoInput from "./TodoInput.js";
import { TODOLIST } from "./todoList.js";
import Todos from "./Todos.js";


let text = document.querySelector('#todoInput'); //input
let pElem = document.querySelector('section') // HTML elem, amibe a todo-kat rakjuk
let inputElem = document.querySelector('.inputElem') // inputnak a div-je
new TodoInput(inputElem) // input peldanyositas
new Todos(TODOLIST,pElem, text) //todo lista peldanyositasa
