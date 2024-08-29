// Array of Question Objects
const placeholderQuestions = [
    {
    category: "Nature",
    question: "The human heart has how many chambers?",
    answer: "4",
    points: 200
    },
    {
    category: "Nature",
    question: "What is the largest animal currently on Earth?",
    answer: "Blue Whale",
    points: 400
    },
    {
    category: "Nature",
    question: "What is the hottest planet in the Solar System?",
    answer: "Venus",
    points: 600
    },
    {
    category: "Nature",
    question: "What is the first element on the periodic table?",
    answer: "Hydrogen",
    points: 800
    },
    {
    category: "Nature",
    question: "Which gas forms about 78% of the Earth's atmosphere?",
    answer: "Nitrogen",
    points: 1000
    },
    {
    category: "Animals",
    question: "What is the fastest  land animal?",
    answer: "Cheetah",
    points: 200
    },
    {
    category: "Animals",
    question: "What is the scientific name for modern day humans?",
    answer: "Homo Sapiens",
    points: 400
    },
    {
    category: "Animals",
    question:
        "The Kakapo is a large, flightless, nocturnal parrot native to which country?",
    answer: "New Zealand",
    points: 600
    },
    {
    category: "Animals",
    question: "Hippocampus is the Latin name for which marine creature?",
    answer: "Seahorse",
    points: 800
    },
    {
    category: "Animals",
    question: "What is Grumpy Cat's real name?",
    answer: "Tardar Sauce",
    points: 1000
    },
    {
    category: "Computers",
    question: "What does GHz stand for?",
    answer: "Gigahertz",
    points: 200
    },
    {
    category: "Computers",
    question: "HTML is what type of language?",
    answer: "Markup Language",
    points: 400
    },
    {
    category: "Computers",
    question: "What amount of bits commonly equals one byte?",
    answer: "8",
    points: 600
    },
    {
    category: "Computers",
    question: "In computing, what does MIDI stand for?",
    answer: "Musical Instrument Digital Interface",
    points: 800
    },
    {
    category: "Computers",
    question: "In web design, what does CSS stand for?",
    answer: "Cascading Style Sheet",
    points: 1000
    },
    {
    category: "Mythology",
    question:
        "Who was the only god from Greece who did not get a name change in Rome?",
    answer: "Apollo",
    points: 200
    },
    {
    category: "Mythology",
    question:
        "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
    answer: "Jason",
    points: 400
    },
    {
    category: "Mythology",
    question:
        "This Greek goddess's name was chosen for the dwarf planet responsible for discord on Pluto's classification amongst astronomers.",
    answer: "Eris",
    points: 600
    },
    {
    category: "Mythology",
    question:
        "Which Greek and Roman god was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more?",
    answer: "Apollo",
    points: 800
    },
    {
    category: "Mythology",
    question:
        "DAILY DOUBLE: Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
    answer: "Orpheus",
    points: 2000
    },
    {
    category: "History",
    question: "How many manned moon landings have there been?",
    answer: "6",
    points: 200
    },
    {
    category: "History",
    question:
        "The original Roman alphabet lacked the following letters EXCEPT:",
    answer: "X",
    points: 400
    },
    {
    category: "History",
    question: "The collapse of the Soviet Union took place in which year?",
    answer: "1991",
    points: 600
    },
    {
    category: "History",
    question: "What was Manfred von Richthofen's nickname?",
    answer: "The Red Baron",
    points: 800
    },
    {
    category: "History",
    question:
        "Which modern day country is the region that was known as Phrygia in ancient times?",
    answer: "Turkey",
    points: 1000
    },
    {
    category: "General",
    question:
        "Which company did Valve cooperate with in the creation of the Vive?",
    answer: "HTC",
    points: 200
    },
    {
    category: "General",
    question: "What alcoholic drink is made from molasses?",
    answer: "Rum",
    points: 400
    },
    {
    category: "General",
    question: "What is the French word for &quot;hat&quot;?",
    answer: "Chapeau",
    points: 600
    },
    {
    category: "General",
    question: "Who is depicted on the US hundred dollar bill?",
    answer: "Benjamin Franklin",
    points: 800
    },
    {
    category: "General",
    question: "What do the letters in the GMT time zone stand for?",
    answer: "Greenwich Mean Time",
    points: 1000
    },
    {
    category: "Final",
    question: "What name was the bootcamp formerly known as?",
    answer: "Burlington Code Academy",
    },
];

let player1Score = 0;
let player2Score = 0;

let questionIndex = 0;
let selectedQuestion = null;


// Function to alert player their turn
function alertPlayer() {
    alert(`Player ${a}'s turn.`);
}


// Event listenters for enabling the guess pass and next round links
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
    }
});

// Event listener to get update the players score in the URL param
document.getElementById("nextRound").addEventListener("click", () => {
    const urlParams = new URLSearchParams();
    urlParams.set('player1Score', player1Score);
    urlParams.set('player2Score', player2Score);
    console.log("URL parameters:", urlParams.toString());
    window.location.href = `/Round2/round-2.html?${urlParams.toString()}`;
});


// Function to check if the players can go to the next round 
function checkNextRound() {
    if (player1Score >= 15000 || player2Score >= 15000 || questionIndex >= placeholderQuestions.length) {
        alert("You Can Go to the Next Round Now!");
        document.getElementById("nextRound").style.pointerEvents = "auto";
    }
}


let popUpBox = document.getElementById("popUp");
let question = document.getElementById("questionLink");


// Function to display and remove the pop up box
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

// Function to dislpay the quesiton on the pop up
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

// Function to change the players turn number
function oneAndTwo() {
    a = a * b;
    b = a / b;
    a = a / b;
}

// Function to alert the players turn
function playerTurn() {
    const selector = document.getElementById("playerTurn");
    selector.textContent = `Player ${a}'s Turn`;
}

// Function to start the necessary game functions
function start() {
    playerTurn();
}

// Function to update the players score
function updateScore(player, points) {
    if (player === 1) {
        player1Score += points;
        document.getElementById("player1Score").textContent = `Player 1 Score: ${player1Score}`;
    } else if (player === 2) {
        player2Score += points;
        document.getElementById("player2Score").textContent = `Player 1 Score: ${player2Score}`;
    }
}


// Function to check the players answer
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

