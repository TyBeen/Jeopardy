let questionIndex = 0;
let selectedQuestion = null;

function alertPlayer() {
    alert(`Player ${a}'s turn.`);
}

document.getElementById("pass").addEventListener("click", (event => {
    var ifDisabled = document.getElementById("pass").style.pointerEvents === "none"; 
    if (ifDisabled) {
        event.preventDefault();
    } else {
        oneAndTwo();
        alertPlayer();
        start();
    }
}))

document.getElementById("guess").addEventListener("click", (event => {
    var ifDisabled = document.getElementById("guess").style.pointerEvents === "none";
    if (ifDisabled) {
        event.preventDefault();
    } else {
        answer1check(questionIndex);
    }
}))

document.getElementById("nextRound").addEventListener("click", (event) => {
    var ifDisabled = document.getElementById("nextRound").style.pointerEvents === "none";
    if (ifDisabled) {
        event.preventDefault();
    } else {
        alert("Going to the Final round!"); 
    }
});


function checkNextRound() {
    if (player1Score >= 15000 || player2Score >= 15000 || questionIndex >= placeholderQuestions.length) {
        alert("You Can Go to the Next Round Now!");
        document.getElementById("nextRound").style.pointerEvents = "auto";
    }
}

let popUpBox = document.getElementById("popUp");
let question = document.getElementById("questionLink");

function displayPopUp() {
    popUpBox.classList.add("display");
    displayNatureQuestionOne(questionIndex);
}

function closePopUp() {
    popUpBox.classList.remove("display")
}

let questionView = document.getElementById("questionLink");

function removeQuestion(index) {
    const questionLinks = document.getElementById(`question-${index}`);
    if (questionLinks) {
        questionLinks.classList.add("answered")
        questionLinks.removeAttribute("onclick")
    }
}

function displayNatureQuestionOne(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].question;

    const answer1 = placeholderQuestions[index].answer;

    paragraph.textContent = questionOne

    document.getElementById("pass").style.pointerEvents = "auto";
    document.getElementById("guess").style.pointerEvents = "auto";
}

function displayAnimalQuestion(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].question;

    const answer1 = placeholderQuestions[index].answer;

    paragraph.textContent = questionOne

    document.getElementById("pass").style.pointerEvents = "auto";
    document.getElementById("guess").style.pointerEvents = "auto";
}

function displayComputerQuestion(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].question;

    const answer1 = placeholderQuestions[index].answer;

    paragraph.textContent = questionOne

    document.getElementById("pass").style.pointerEvents = "auto";
    document.getElementById("guess").style.pointerEvents = "auto";
}

function displayMythologyQuestion(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].question;

    const answer1 = placeholderQuestions[index].answer;

    paragraph.textContent = questionOne

    document.getElementById("pass").style.pointerEvents = "auto";
    document.getElementById("guess").style.pointerEvents = "auto";
}

function displayHistoryQuestion(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].question;

    const answer1 = placeholderQuestions[index].answer;

    paragraph.textContent = questionOne

    document.getElementById("pass").style.pointerEvents = "auto";
    document.getElementById("guess").style.pointerEvents = "auto";
}

function displayGeneralQuestion(index) {
    questionIndex = index;
    const paragraph = document.getElementById("displayQuestion");

    const questionOne = placeholderQuestions[index].question;

    const answer1 = placeholderQuestions[index].answer;

    paragraph.textContent = questionOne

    document.getElementById("pass").style.pointerEvents = "auto";
    document.getElementById("guess").style.pointerEvents = "auto";
}

let a = 1;
let b = 2;

let answer = document.getElementById("answer");

function oneAndTwo() {
    a = a * b;
    b = a / b;
    a = a / b;
}

function playerTurn() {
    const selector = document.getElementById("playerTurn");
    selector.textContent = `Player ${a}'s Turn`;
}

function start() {
    playerTurn();
}

function updateScore(player, points) {
    if (player === 1) {
        player1Score += points;
        document.getElementById("player1Score").textContent = `Player 1 Score: ${player1Score}`;
    } else if (player === 2) {
        player2Score += points;
        document.getElementById("player2Score").textContent = `Player 1 Score: ${player2Score}`;
    }
}

function answer1check(index) {
    const playerAnswer = answer.value.trim();
    const correctAnswer = placeholderQuestions[index].answer;
    const points = placeholderQuestions[index].points;

    if (playerAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct!")
        updateScore(a, points);
        removeQuestion(index);
        checkNextRound();
        numberCarry();
    } else {
        alert("INCORRECT, next players turn")
        updateScore(a, -points);
        oneAndTwo();
        playerTurn();
    }

    answer.value = "";
    closePopUp();
}