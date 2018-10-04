let lives;
let livesbox = document.getElementById("lives");

let answerbox = document.getElementById("gameButtons");

let gamebox1 = document.getElementById("room1Game");
let gamebox2 = document.getElementById("room2Game");

let rightAnswerArray = [];
let answerArray = [];

function setRoom1Game() {
    answerbox.setAttribute("data-roomNumber", "room1");
    escapeRoom1();
}

function setRoom2Game() {
    answerbox.setAttribute("data-roomNumber", "room2");
    escapeRoom2();
}


let roomNumber = answerbox.getAttribute("data-roomNumber");

$(".button").on("click", function() {
    answerArray.push($(this).attr("data-btnNum"));
    console.log(answerArray.length);
    console.log(answerArray);

    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] == rightAnswerArray[i]) {
            // console.log("correct");
            if (answerArray[5] == rightAnswerArray[5]) {
                console.log("You have escaped");
            }
            else {
                console.log("Correct");
            }
        }
        else {
            console.log("Incorrect");
            answerArray = [];
            lives--;
        }
    }

    livesbox.textContent = lives;

    if (lives == 0) {
        console.log("You did not escape, you are stuck in here forever")
    }

});


function escapeRoom1() {
    gameDisplay()
    
    rightAnswerArray = ["btnNum3", "btnNum2", "btnNum4", "btnNum1", "btnNum6", "btnNum5"];
    answerArray = [];
    
    lives = 3;
    livesbox.textContent = lives;
    
    gamebox1;
}

function escapeRoom2() {
    gameDisplay()

    rightAnswerArray = ["btnNum4", "btnNum1", "btnNum3", "btnNum5", "btnNum2", "btnNum6"];
    answerArray = [];

    lives = 3;
    livesbox.textContent = lives;

    gamebox2;
}

function gameStart() {
    document.getElementById("gameIntro").style.display="block";
    document.getElementById("gameSelection").style.display="block";
    document.getElementById("gameLives").style.display="none";
    document.getElementById("gameButtons").style.display="none";
    document.getElementById("room1Game").style.display="none";
    document.getElementById("room2Game").style.display="none";
}

function gameDisplay() {
    document.getElementById("gameIntro").style.display="none";
    document.getElementById("gameSelection").style.display="block";
    document.getElementById("gameLives").style.display="block";
    document.getElementById("gameButtons").style.display="block";
}

gameStart();
