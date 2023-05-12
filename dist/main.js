"use strict";
const btn = document.getElementById("btn");
const inputList = document.getElementById("inputList");
const todoform = document.querySelector('.todoform');
const tasktodo = document.querySelector('.tasktodo');
const todos = readToDos();
todos.forEach(addToDoTask);
todoform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newToDo = {
        text: inputList.value,
        completed: false
    };
    addToDoTask(newToDo);
    todos.push(newToDo);
    saveTaskToLocalStorage();
});
function saveTaskToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function addToDoTask(todo) {
    const taskLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTaskToLocalStorage();
    });
    taskLi.append(todo.text);
    taskLi.append(checkbox);
    tasktodo === null || tasktodo === void 0 ? void 0 : tasktodo.append(taskLi);
    inputList.value = "";
}
function readToDos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
