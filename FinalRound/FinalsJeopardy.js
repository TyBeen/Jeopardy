// Array for question Object

const placeholderQuestions = [
    {
        category: "Final",
        question: "What name was the bootcamp formerly known as?",
        answer: "Burlington Code Academy",
    }
];

// Variables for retrieving and adding player scores
const urlParamsFinal = new URLSearchParams(window.location.search);
let player1ScoreFinal = parseInt(urlParamsFinal.get('player1Score')) || 0;
let player2ScoreFinal = parseInt(urlParamsFinal.get('player2Score')) || 0;

// Function to add player score
function handleQueryParametersFinal() {
    if (!isNaN(player1ScoreFinal)) {
        document.getElementById('player1Score').textContent = `Player 1 Score: ${player1ScoreFinal}`;
    }
    if (!isNaN(player2ScoreFinal)) {
        document.getElementById('player2Score').textContent = `Player 2 Score: ${player2ScoreFinal}`;
    }
}

handleQueryParametersFinal();

// Variables for question functions to pull from
let questionIndex = 0;
let selectedQuestion = null;

// Variable to get id's from html
let popUpBox = document.getElementById("popUp");

let answer = document.getElementById("answer");

// Functions to dislpay and remove the question popup
function displayPopUp() {
    popUpBox.classList.add("display");
    displayQuestion(questionIndex);
}

function closePopUp() {
    popUpBox.classList.remove("display")
}

// Functions to remove and add the question to the pop up
function removeQuestion(index) {
    const questionLinks = document.getElementById(`question-${index}`);
    if (questionLinks) {
        questionLinks.classList.add("answered")
        questionLinks.removeAttribute("onclick")
    }
}

function displayQuestion(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].question;

    paragraph.textContent = questionOne
}


// Function to display the category in the pop up
function displayCategory(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].category;

    paragraph.textContent = questionOne
}

function updateScore(player, points) {
    if (player === 1) {
    player1ScoreFinal += points;
    document.getElementById('player1Score').textContent = `Player 1 Score: ${player1ScoreFinal}`;
    } else if (player === 2) {
    player2ScoreFinal += points;
    document.getElementById('player2Score').textContent = `Player 2 Score: ${player2ScoreFinal}`;
    }
}


// Function to retrieve the answer entered by the players and assign them and check if they are correct
function submitBetsAndAnswers() {
    const player1Bet = parseInt(document.getElementById('player1Bet').value);
    const player2Bet = parseInt(document.getElementById('player2Bet').value); 
    const player1Answer = document.getElementById('player1Answer').value.trim();
    const player2Answer = document.getElementById('player2Answer').value.trim();
    const correctAnswer = placeholderQuestions[questionIndex].answer.toLowerCase();

    if (player1Answer.toLowerCase() === correctAnswer) {
        updateScore(1, player1Bet);
        alert(`Player 1 has entered the correct answer and points have been added to their score accordingly!`)
    } else {
        updateScore(1, -player1Bet);
        alert(`Player 1 has entered the wrong answer and their points have been removed accordingly!`)
    }

    if (player2Answer.toLowerCase() === correctAnswer) {
        updateScore(2, player2Bet);
        alert(`Player 2 has entered the correct answer and points have been added to their score accordingly!`)
    } else {
        updateScore(2, -player2Bet);
        alert(`Player 2 has entered the wrong answer and their points have been removed accordingly!`)
    }

    document.getElementById('player1Bet').value = '';
    document.getElementById('player2Bet').value = '';
    document.getElementById('player1Answer').value = '';
    document.getElementById('player2Answer').value = '';

    closePopUp();
}