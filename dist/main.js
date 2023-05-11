"use strict";
const todos = [];
const btn = document.getElementById("btn");
const inputList = document.getElementById("inputList");
const todoform = document.querySelector('.todoform');
const tasktodo = document.querySelector('.tasktodo');
todoform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newToDo = {
        text: inputList.value,
        completed: false
    };
    todos.push(newToDo);
    console.log(todos);
    const taskLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    taskLi.append(inputList.value);
    taskLi.append(checkbox);
    tasktodo === null || tasktodo === void 0 ? void 0 : tasktodo.append(taskLi);
    inputList.value = "";
});
