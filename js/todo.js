const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");

let todos = [];

function addTodo(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    const id = Date.now();

    const todoObj = {
        todo : newTodo,
        id : id
    };

    if(todos.includes(newTodo)) {
        alert("Already exist");
    } else {
        todos.push(todoObj);
        saveTodo();
        makeTodo(todoObj);
        todoInput.value = "";
    }
}

todoForm.addEventListener("submit", addTodo);


function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function makeTodo(todoObj) { 
    const li = document.createElement("li");
    li.innerText = todoObj.todo;
    li.id = todoObj.id;
    
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);

    li.appendChild(btn);
    todoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;

    todos = todos.filter((todo) => todo.id !== parseInt(li.id));

    saveTodo();
    li.remove();
}


if(localStorage.getItem("todos")) {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));

    savedTodos.forEach(makeTodo);

    todos = savedTodos;
}