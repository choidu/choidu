const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const Li = event.target.parentElement;
    Li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(Li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const toDoLi = document.createElement("li");
    toDoLi.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    toDoLi.appendChild(span);
    toDoLi.appendChild(button);
    toDoList.appendChild(toDoLi);
}

function handToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function todoFilter(){

}