// Array of objects of jeopardy questions
const placeholderQuestions = [
    {
    category: "Nature",
    question:
        "Alzheimer's disease primarily affects which part of the human body?",
    answer: "Brain",
    points: 400
    },
    {
    category: "Nature",
    question:
        "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
    answer: "Sputnik 1",
    points: 800
    },
    {
    category: "Nature",
    question: "The asteroid belt is located between which two planets?",
    answer: "Mars and Jupiter",
    points: 1200
    },
    {
    category: "Nature",
    question: "What does LASER stand for?",
    answer: "Light amplification by stimulated emission of radiation",
    points: 1600,
    },
    {
    category: "Nature",
    question: "Dry ice is the solid form of what substance?",
    answer: "Carbon dioxide",
    points: 2000
    },
    {
    category: "Animals",
    question: "Which class of animals are newts members of?",
    answer: "Amphibian",
    points: 400
    },
    {
    category: "Animals",
    question: "What is the collective noun for a group of crows?",
    answer: "Murder",
    points: 800
    },
    {
    category: "Animals",
    question: "By definition, where does an abyssopelagic animal live?",
    answer: "Bottom of the ocean",
    points: 1200
    },
    {
    category: "Animals",
    question: "What colour is the female blackbird?",
    answer: "Brown",
    points: 1600
    },
    {
    category: "Animals",
    question: "What is the name of a rabbit's house?",
    answer: "Burrow",
    points: 2000
    },
    {
    category: "Computers",
    question:
        "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    answer: "HD Graphics 500",
    points: 400
    },
    {
    category: "Computers",
    question: "On Twitter, what was the original character limit for a Tweet?",
    answer: "140",
    points: 800
    },
    {
    category: "Computers",
    question: "In JavaScript, what is the = operator?",
    answer: "Assignment",
    points: 1200
    },
    {
    category: "Computers",
    question:
        "Which programming language shares its name with an island in Indonesia?",
    answer: "Java",
    points: 1600
    },
    {
    category: "Computers",
    question: "In computing, what does LAN stand for?",
    answer: "Local Area Network",
    points: 2000
    },
    {
    category: "Mythology",
    question: "In most traditions, who was the wife of Zeus?",
    answer: "Hera",
    points: 400
    },
    {
    category: "Mythology",
    question:
        "Which of these mythological creatures is said to be half-man and half-horse?",
    answer: "Centaur",
    points: 800
    },
    {
    category: "Mythology",
    question: "What mythology did the god Apollo come from?",
    answer: "Greek and Roman",
    points: 1200
    },
    {
    category: "Mythology",
    question:
        "What mytological creatures have women's faces and vultures' bodies?",
    answer: "Harpies",
    points : 1600
    },
    {
    category: "Mythology",
    question:
        "The Nike apparel and footwear brand takes it's name from the Greek goddess of what?",
    answer: "Victory",
    points: 2000
    },
    {
    category: "History",
    question: "Who was the first president of the United States?",
    answer: "George Washington",
    points: 400
    },
    {
    category: "History",
    question: "What was the first sport to have been played on the moon?",
    answer: "Golf",
    points: 800
    },
    {
    category: "History",
    question: "What year did World War I begin?",
    answer: "1914",
    points: 1200
    },
    {
    category: "History",
    question: "How old was Adolf Hitler when he died?",
    answer: "56",
    points: 1600
    },
    {
    category: "History",
    question:
        "DAILY DOUBLE: Abolitionist John Brown raided the arsenal in which Virginia Town?",
    answer: "Harper's Ferry",
    points: 4000
    },
    {
    category: "General",
    question: "How tall is the Burj Khalifa?",
    answer: "2,722 ft",
    points: 400
    },
    {
    category: "General",
    question:
        "When someone is cowardly, they are said to have what color belly?",
    answer: "Yellow",
    points: 800
    },
    {
    category: "General",
    question: "What is the name of NASA's most famous space telescope?",
    answer: "Hubble Space Telescope",
    points: 1200
    },
    {
    category: "General",
    question: "Who is the youngest person to recieve a Nobel Prize?",
    answer: "Malala Yousafzai",
    points: 1600
    },
    {
    category: "General",
    question: "What is the famous Papa John's last name?",
    answer: "Schnatter",
    points: 2000
    }
];  


// Variables and function for URL params to get players score
const urlParams = new URLSearchParams(window.location.search);
let player1Score = parseInt(urlParams.get('player1Score')) || 0;
let player2Score = parseInt(urlParams.get('player2Score')) || 0;

function handleQueryParameters() {
    if (!isNaN(player1Score)) {
        document.getElementById('player1Score').textContent = `Player 1 Score: ${player1Score}`;
    }
    if (!isNaN(player2Score)) {
        document.getElementById('player2Score').textContent = `Player 2 Score: ${player2Score}`;
    }
}

handleQueryParameters()

// Variable for questions index
let questionIndex = 0;
let selectedQuestion = null;

// Function to displays players turn
function alertPlayer() {
    alert(`Player ${a}'s turn.`);
}


// Event listeners to enable the pass & guess & next round buttons
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
        alert("Going to the next round!"); 
        const urlParams = new URLSearchParams();
        urlParams.set('player1Score', player1Score);
        urlParams.set('player2Score', player2Score);
        window.location.href = `/FinalRound/final-jeopardy.html?${urlParams.toString()}`;
        console.log("hello")
    }
});


// Function to alert players when they can go to the next round
function checkNextRound() {
    if (player1Score >= 30000 || player2Score >= 30000 || questionIndex >= placeholderQuestions.length) {
        alert("You Can Go to the Final Round Now!");
        document.getElementById("nextRound").style.pointerEvents = "auto";
    }
}

// Variables for pop up box and question in pop  up box
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


// Function to remove question
function removeQuestion(index) {
    const questionLinks = document.getElementById(`question-${index}`);
    if (questionLinks) {
        questionLinks.classList.add("answered")
        questionLinks.removeAttribute("onclick")
    }
}

// Function to display question
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

// Function for switching the player number
function oneAndTwo() {
    a = a * b;
    b = a / b;
    a = a / b;
}

// Function to display the player turn
function playerTurn() {
    const selector = document.getElementById("playerTurn");
    selector.textContent = `Player ${a}'s Turn`;
}

// Function to start the necessary functions to run the game properly
function start() {
    playerTurn();
    handleQueryParameters();
    
}

// Function to update the players scores
function updateScore(player, points) {
    if (player === 1) {
        player1Score += points;
        document.getElementById("player1Score").textContent = `Player 1 Score: ${player1Score}`;
    } else if (player === 2) {
        player2Score += points;
        document.getElementById("player2Score").textContent = `Player 2 Score: ${player2Score}`;
    }
    updateURLParams();
}

// Function to update the players scores in the url params
function updateURLParams() {
    const urlParams = new URLSearchParams();
    urlParams.set('player1Score', player1Score);
    urlParams.set('player2Score', player2Score);
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
}

//Function to check the answer submitted
function answer1check(index) {
    const playerAnswer = answer.value.trim();
    const correctAnswer = placeholderQuestions[index].answer;
    const points = placeholderQuestions[index].points;

    if (playerAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct!")
        updateScore(a, points);
        removeQuestion(index);
        checkNextRound();
    } else {
        alert("INCORRECT, next players turn")
        updateScore(a, -points);
        oneAndTwo();
        playerTurn();
    }

    answer.value = "";
    closePopUp();
}