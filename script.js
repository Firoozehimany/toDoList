let button = document.getElementById("button")
let input = document.getElementById("input")
let ul = document.querySelector("#showList ul")
let todos = [
]

function printTasks() {
    ul.innerHTML = ""
    for (let i = 0; i < todos.length; i++) {
        createTask(i)
    }
}

function addToArrey() {
    if (input.value != "") {
        todos.push({ title: input.value, isSuccess: false })
        printTasks()
    } else {
        alert("لطفا تسک خود را وارد کنید.")
    }
}

function createTask(currentItem) {
    let li = document.createElement("li")
    li.innerHTML = todos[currentItem].title
    let removeButton = document.createElement("button")
    removeButton.appendChild(document.createTextNode("X"))
    ul.appendChild(li)
    li.appendChild(removeButton)
    input.value = ""

    function toggle() {
        li.classList.toggle("active")
    }

    function removeTaxk () { 
        todos.splice(currentItem,1)
        printTasks()
    }
    
    li.addEventListener("click", toggle)
    removeButton.addEventListener("click", removeTaxk)
}

function addWithEnter(event) {
    if (event.keyCode === 13) {
        addToArrey()
    }
}

button.addEventListener("click", addToArrey)
input.addEventListener("keypress", addWithEnter)