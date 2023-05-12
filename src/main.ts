interface Todo {
    text: string,
    completed: boolean
}

const btn = document.getElementById("btn")!;
const inputList = document.getElementById("inputList")! as HTMLInputElement;
const todoform = document.querySelector('.todoform')!;
const tasktodo = document.querySelector('.tasktodo')!;

const todos: Todo [] = readToDos()
todos.forEach(addToDoTask)

todoform.addEventListener("submit", (e) => {
    e.preventDefault()

    const newToDo: Todo = {
        text: inputList.value,
        completed: false
    }

    addToDoTask(newToDo)
    todos.push(newToDo)
    saveTaskToLocalStorage()
})

function saveTaskToLocalStorage () {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function addToDoTask (todo: Todo) {
    const taskLi = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed

    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked
        saveTaskToLocalStorage()
    })

    taskLi.append(todo.text)
    taskLi.append(checkbox)
    tasktodo?.append(taskLi)
    inputList.value = ""
}


function readToDos (): Todo[] {
    const todosJSON = localStorage.getItem("todos")
    if (todosJSON === null) return []
    return JSON.parse(todosJSON)
}


