
const myAddButton = document.querySelector("button")
const myInput = document.querySelector("input")
const myUl = document.querySelector("ul")

// Javascript program that dynamically creates li tag depending on how many tasks are present

myAddButton.addEventListener("click", function()
{
    // Logic to collect the task
    let enteredTask = myInput.value

    // textcontent == text
    // innerHTML == text + HTML code(Evaluate)

    // create a li tag
    let myLi = document.createElement("li")
    myLi.innerHTML = `${enteredTask}<i class="fa-solid fa-trash" id="delete"></i>`

    myUl.append(myLi)
    

    // Logic to clear the input box
    myInput.value = ""


    // If i have to delete the task, i have to click on that delete button
    // const deleteButton = document.querySelector("#delete")
    // console.log(deleteButton)

    myLi.querySelector("#delete").addEventListener("click", function()
    {
        myLi.remove() 
    })
})
