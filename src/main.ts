interface Todo {
    text: string,
    completed: false
}

const todos: Todo [] = []

const btn = document.getElementById("btn")!;
const inputList = document.getElementById("inputList")! as HTMLInputElement;
const todoform = document.querySelector('.todoform')!;
const tasktodo = document.querySelector('.tasktodo')!;

todoform.addEventListener("submit", (e) => {
    e.preventDefault()

    const newToDo: Todo = {
        text: inputList.value,
        completed: false
    }

    todos.push(newToDo)
    console.log(todos)
    const taskLi = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    taskLi.append(inputList.value)
    taskLi.append(checkbox)
    tasktodo?.append(taskLi)
    inputList.value = ""
})