
const questions = [
    {
        title: "What is the capital of France?",
        A: "Paris",
        B: "London",
        C: "Berlin",
        D: "Rome",
        correctAnswer: "Paris" // Paris
    },
    {
        title: "Who wrote 'Romeo and Juliet'?",
        A: "William Shakespeare",
        B: "Charles Dickens",
        C: "Jane Austen",
        D: "Mark Twain",
        correctAnswer: "William Shakespeare" // William Shakespeare
    },
    {
        title: "What is the chemical symbol for water?",
        A: "H2O",
        B: "CO2",
        C: "NaCl",
        D: "O2",
        correctAnswer: "H2O" // H2O
    },
    {
        title: "Which planet is known as the Red Planet?",
        A: "Mars",
        B: "Jupiter",
        C: "Venus",
        D: "Mercury",
        correctAnswer: "Mars" // Mars
    },
    {
        title: "Who painted the Mona Lisa?",
        A: "Leonardo da Vinci",
        B: "Pablo Picasso",
        C: "Vincent van Gogh",
        D: "Michelangelo",
        correctAnswer: "Leonardo da Vinci" // Leonardo da Vinci
    }
]

const myh1 = document.querySelector("h1")//<h1></h1>

const firstButton = document.querySelector("#first")
const secondButton = document.querySelector("#second")
const thirdButton = document.querySelector("#third")
const fourthButton = document.querySelector("#fourth")
const continueButton = document.querySelector("#continue")
const submitButton = document.querySelector("#submit")

function loadQuestions(info)
{
    myh1.textContent = info.title
    firstButton.textContent = info.A
    secondButton.textContent = info.B
    thirdButton.textContent = info.C
    fourthButton.textContent = info.D
}

loadQuestions(questions[0])

let questionIndex = 1


let score = 0

// Logic to listen to click event on 4 buttons
let allDetails = document.querySelectorAll(".option")
// console.log(allDetails)[1st, 2nd, 3rd, 4th]
allDetails.forEach(function(i)
{
    i.addEventListener("click", function(event)
    {
        // Change the color
        i.style.backgroundColor = "brown"
       // Fetch the option name(A, B, C, D)
       let actualOptionChoosen = event.target.innerText

       questions.map(function(i)
        {
            if(i.correctAnswer == actualOptionChoosen)
            {
                score++
            }
        })
    })
})


// We need to listen to click event/action on Continue button(addEventListener())
continueButton.addEventListener("click", function()
{
    // Logic for going to the next question
    loadQuestions(questions[questionIndex])
    questionIndex++

    // Logic for controlling continue button and submit button
    if(questionIndex > questions.length - 1)
    {
        //Logic to display submit button(remove that hidden)
        continueButton.hidden = true
        submitButton.hidden = false
    }
})



submitButton.addEventListener("click", function()
{
    alert("Your total score is: "+score)
})



