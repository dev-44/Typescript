interface ToDo {
    text: string,
    completed: boolean
}


const btn = document.getElementById("btn")! as HTMLButtonElement   //  ! = Non-null Assertion
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!
const list = document.getElementById("todolist")!

const todos: ToDo[] = readToDos()
todos.forEach(createToDo)

/* btn.addEventListener("click", function(){
    alert(input.value)
    input.value = ""
}) */

/* form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("SUBMITTED!")
}) */

function readToDos(): ToDo[]{
   const todosJSON = localStorage.getItem("todos")

   if(todosJSON === null) return []
   return JSON.parse(todosJSON)
}

function saveToDos(){
   localStorage.setItem("todos", JSON.stringify(todos))
}

function handleSubmit(e: SubmitEvent){
    e.preventDefault()
    const newToDo: ToDo = {
      text: input.value,
      completed: false
    }
    createToDo(newToDo)
    todos.push(newToDo)
    saveToDos()
    
    input.value = ""
}

function createToDo(todo: ToDo){
   //const newTodoText = input.value
   const newLI = document.createElement("li")
   const checkbox = document.createElement("input")
   checkbox.type = "checkbox"
   checkbox.checked = todo.completed

   checkbox.addEventListener("change", function(){
      todo.completed = checkbox.checked
      saveToDos()
   })

   newLI.append(todo.text)
   newLI.append(checkbox)
   list.append(newLI)
}

form.addEventListener("submit", handleSubmit)