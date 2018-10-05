let lives;
let livesbox = document.getElementById("lives");

let currentRoom;

let rightAnswerArray = [];
let answerArray = [];

let checkComplete1;
let checkComplete2;


$(".button").on("click", function() {
    answerArray.push($(this).attr("data-btnNum"));
    // console.log(answerArray.length);
    console.log(answerArray);

    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] == rightAnswerArray[i]) {
            // console.log("correct");
            if (answerArray[5] == rightAnswerArray[5]) {
                console.log("You've escaped");
                if (currentRoom == "room1") {
                    escapedRoom1();
                }
                else if (currentRoom == "room2") {
                    escapedRoom2();
                }
            }
        }
        else {
            // console.log("Incorrect");
            answerArray = [];
            lives--;
        }
    }
    
    if (checkComplete1 == true && checkComplete2 == true) {
        console.log("congratulations");
        escapedBoth();            
    }

    livesbox.textContent = lives;

    if (lives == 0) {
        // console.log("You did not escape, you are stuck in here forever")
        notEscaped();
    }

});


function escapeRoom1() {
    currentRoom = "room1";

    gameDisplay()

    rightAnswerArray = ["btnNum3", "btnNum2", "btnNum4", "btnNum1", "btnNum6", "btnNum5"];
    answerArray = [];

    lives = 3;
    livesbox.textContent = lives;

    gameContentRoom1()
}

function escapeRoom2() {
    currentRoom = "room2";

    gameDisplay()

    rightAnswerArray = ["btnNum4", "btnNum1", "btnNum3", "btnNum5", "btnNum2", "btnNum6"];
    answerArray = [];

    lives = 3;
    livesbox.textContent = lives;

    gameContentRoom2()
}

function gameStart() {
    document.getElementById("gameIntro").style.display = "block";
    document.getElementById("gameSelectionRoom1").style.display = "inline-block";
    document.getElementById("gameSelectionRoom2").style.display = "inline-block";
    document.getElementById("gameLives").style.display = "none";
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("escapedRoom1").style.display = "none";
    document.getElementById("escapedRoom2").style.display = "none";
    document.getElementById("notEscaped").style.display = "none";
    document.getElementById("escapedBoth").style.display = "none";
}

function gameDisplay() {
    document.getElementById("gameIntro").style.display = "none";
    document.getElementById("gameLives").style.display = "block";
    document.getElementById("gameButtons").style.display = "block";
    document.getElementById("escapedRoom1").style.display = "none";
    document.getElementById("escapedRoom2").style.display = "none";
    document.getElementById("notEscaped").style.display = "none";
    document.getElementById("escapedBoth").style.display = "none";
}

function gameContentRoom1() {
    document.getElementById("gameSelectionRoom1").style.display = "none";
    document.getElementById("gameSelectionRoom2").style.display = "block";
    document.getElementById("gameRoom1").style.display = "block";
    document.getElementById("gameRoom2").style.display = "none";
}

function gameContentRoom2() {
    document.getElementById("gameSelectionRoom1").style.display = "block";
    document.getElementById("gameSelectionRoom2").style.display = "none"
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "block";
}

function escapedRoom1() {
    document.getElementById("gameSelectionRoom1").style.display = "none";
    document.getElementById("gameSelectionRoom2").style.display = "block";
    document.getElementById("gameLives").style.display = "none";
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("escapedRoom1").style.display = "block";
    document.getElementById("notEscaped").style.display = "none";
    document.getElementById("escapedBoth").style.display = "none";
    
    checkComplete1 = true;
}

function escapedRoom2() {
    document.getElementById("gameSelectionRoom1").style.display = "block";
    document.getElementById("gameSelectionRoom2").style.display = "none";
    document.getElementById("gameLives").style.display = "none";
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("escapedRoom2").style.display = "block";
    document.getElementById("notEscaped").style.display = "none";
    document.getElementById("escapedBoth").style.display = "none";
    
    checkComplete2 = true;
}

function notEscaped() {
    document.getElementById("gameSelectionRoom1").style.display = "inline-block";
    document.getElementById("gameSelectionRoom2").style.display = "inline-block";
    document.getElementById("gameLives").style.display = "none";
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("escapedRoom1").style.display = "none";
    document.getElementById("escapedRoom2").style.display = "none";
    document.getElementById("notEscaped").style.display = "block";
    document.getElementById("escapedBoth").style.display = "none";
}

function escapedBoth() {
    document.getElementById("gameSelectionRoom1").style.display = "none";
    document.getElementById("gameSelectionRoom2").style.display = "none";
    document.getElementById("gameLives").style.display = "none";
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("escapedRoom1").style.display = "none";
    document.getElementById("escapedRoom2").style.display = "none";
    document.getElementById("notEscaped").style.display = "none";
    document.getElementById("escapedBoth").style.display = "block";
}

gameStart();
