const questions = []

const question1 = {
    category: "Math",
    question: "2 + 2?",
    choices: ["3","2","4"],
    answer: "4"
}
const question2 = {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus"],
    answer: "Mars"
}
const question3 = {
    category: "Programming",
    question: "Which language is used to style web pages?",
    choices: ["HTML", "CSS", "Python"],
    answer: "CSS"
}
const question4 = {
    category: "History",
    question: "Who discovered America?",
    choices: ["Christopher Columbus", "Napoleon", "Einstein"],
    answer: "Christopher Columbus"
}
const question5 = {
    category: "Geographyt",
    question: "Which continent is Argentina in?",
    choices: ["Europe", "America", "Africa"],
    answer: "America"
}

const getRandomQuestion = arr => {
    const tam = arr.length
    const random = Math.floor(Math.random()*tam)
    return arr[random]
}

const getRandomComputerChoice = arr => arr[Math.floor(Math.random()*arr.length)]

const getResults = (questionObj,computerChoice) => computerChoice === questionObj.answer? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`

questions.push(question1,question2,question3,question4,question5)

const randomQuestion = getRandomQuestion(questions)
console.log(randomQuestion)
const computerChoice = getRandomComputerChoice(randomQuestion.choices)
console.log(computerChoice)
const result = getResults(randomQuestion,computerChoice)
console.log(result)
