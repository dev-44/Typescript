const btn = document.getElementById("btn")! as HTMLButtonElement   //  ! = Non-null Assertion
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!
const list = document.getElementById("todolist")!

/* btn.addEventListener("click", function(){
    alert(input.value)
    input.value = ""
}) */

/* form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("SUBMITTED!")
}) */

function handleSubmit(e: SubmitEvent){
    e.preventDefault()
    //console.log("SUBMITTED!")
    const newTodoText = input.value
    const newLI = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    newLI.append(newTodoText)
    newLI.append(checkbox)
    list.append(newLI)
    
    input.value = ""
}

form.addEventListener("submit", handleSubmit)