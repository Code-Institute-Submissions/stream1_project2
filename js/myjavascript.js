let lives;
let livesbox = document.getElementById("lives");

let status;
let statusbox = document.getElementById("status");

let currentRoom;

let rightAnswerArray = [];
let answerArray = [];

let checkComplete1;
let checkComplete2;
let checkComplete3;


$(".button").on("click", function() {
    answerArray.push($(this).attr("data-btnNum"));
    console.log(answerArray);

    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] == rightAnswerArray[i]) {
            document.getElementById("status").innerHTML="Good! But if you make a mistake it's back to square one.";
            if (answerArray[5] == rightAnswerArray[5]) {
                if (currentRoom == "room1") {
                    checkComplete1 = true;
                    if (checkComplete1 == true && checkComplete2 == true && checkComplete3 == true) {
                        $("#modal__escaped-all").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete1 == true && checkComplete2 == true) {
                        $("#modal__escaped-room1-2").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete1 == true && checkComplete3 ==true) {
                        $("#modal__escaped-room1-3").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete1 == true) {
                        $("#modal__escaped-room1").modal({backdrop: 'static', keyboard: false});
                    }
                }
                else if (currentRoom == "room2") {
                    checkComplete2 = true;
                    if (checkComplete2 == true && checkComplete1 == true && checkComplete3 == true) {
                        $("#modal__escaped-all").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete2 == true && checkComplete1 == true) {
                        $("#modal__escaped-room1-2").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete2 == true && checkComplete3 ==true) {
                        $("#modal__escaped-room2-3").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete2 == true) {
                        $("#modal__escaped-room2").modal({backdrop: 'static', keyboard: false});
                    }
                }
                else if (currentRoom == "room3") {
                    checkComplete3 = true;
                    if (checkComplete3 == true && checkComplete1 == true && checkComplete2 == true) {
                        $("#modal__escaped-all").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete3 == true && checkComplete1 == true) {
                        $("#modal__escaped-room1-3").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete3 == true && checkComplete2 ==true) {
                        $("#modal__escaped-room2-3").modal({backdrop: 'static', keyboard: false});
                    }
                    else if (checkComplete3 == true) {
                        $("#modal__escaped-room3").modal({backdrop: 'static', keyboard: false});
                    }
                }
            }
        }
        else {
            document.getElementById("status").innerHTML="Oh dear! You lost a life and have to start again.";
            answerArray = [];
            lives--;
        }
    }
    
    
    // if (checkComplete1 == true && checkComplete2 == true && checkComplete3 == true) {
    //     document.getElementById("modal__escaped-room1").style.display = "none";
    //     document.getElementById("modal__escaped-room2").style.display = "none";
    //     document.getElementById("modal__escaped-room3").style.display = "none";
    //     $("#modal__escaped-all").modal({backdrop: 'static', keyboard: false});
    // }


    livesbox.textContent = lives;

    // if (lives == 3) {
    //     document.getElementById("status").innerHTML="Good! But if you make a mistake it's back to square one.";
    // }
    // else if (lives == 2) {
    //     document.getElementById("status").innerHTML="Oh dear! You lost a life and have to start again.";
    // }
    // else if (lives == 1) {
    //     document.getElementById("status").innerHTML="One more mistake and you're mine. Start again.";
    // }
    // else 
    if (lives == 0) {
        document.getElementById("status").innerHTML="";
        $("#modal__fail").modal({backdrop: 'static', keyboard: false});
    }

});


function escapeRoom1() {
    currentRoom = "room1";

    gameDisplay();

    rightAnswerArray = ["btnNum3", "btnNum2", "btnNum4", "btnNum1", "btnNum6", "btnNum5"];
    answerArray = [];

    lives = 3;
    livesbox.textContent = lives;
    
    status = "";
    statusbox.textContent = status;
    

    gameContentRoom1();
}

function escapeRoom2() {
    currentRoom = "room2";

    gameDisplay();

    rightAnswerArray = ["btnNum4", "btnNum1", "btnNum3", "btnNum5", "btnNum2", "btnNum6"];
    answerArray = [];

    lives = 3;
    livesbox.textContent = lives;
    
    status = "";
    statusbox.textContent = status;
    
    gameContentRoom2();
}

function escapeRoom3() {
    currentRoom = "room3";

    gameDisplay();

    rightAnswerArray = ["btnNum2", "btnNum6", "btnNum1", "btnNum4", "btnNum3", "btnNum5"];
    answerArray = [];

    lives = 3;
    livesbox.textContent = lives;
    
    status = "";
    statusbox.textContent = status;
    
    gameContentRoom3();
}

function playAgain() {
    location.reload();
}

function gameStart() {
    document.getElementById("gameIntro").style.display = "block";
    document.getElementById("gameSelectionRoom1").style.display = "inline-block";
    document.getElementById("gameSelectionRoom2").style.display = "inline-block";
    document.getElementById("gameSelectionRoom3").style.display = "inline-block";
    document.getElementById("gameBoxContent").style.display = "none";
    document.getElementById("gameLives").style.display = "none";
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("gameRoom3").style.display = "none";
    document.getElementById("gameHints1").style.display = "none";
    document.getElementById("gameHints2").style.display = "none";
    document.getElementById("gameHints3").style.display = "none";
}

function gameDisplay() {
    document.getElementById("gameIntro").style.display = "none";
    document.getElementById("gameSelections").style.display = "none";
    document.getElementById("gameLives").style.display = "block";
    document.getElementById("gameButtons").style.display = "block";
    document.getElementById("gameBoxContent").style.display = "block";
}

function gameContentRoom1() {
    document.getElementById("gameSelectionRoom1").style.display = "none";
    document.getElementById("gameSelectionRoom2").style.display = "none";
    document.getElementById("gameSelectionRoom3").style.display = "none";
    document.getElementById("gameRoom1").style.display = "block";
    document.getElementById("gameHints1").style.display = "block";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("gameHints2").style.display = "none";
    document.getElementById("gameRoom3").style.display = "none";
    document.getElementById("gameHints3").style.display = "none";
}

function gameContentRoom2() {
    document.getElementById("gameSelectionRoom1").style.display = "none";
    document.getElementById("gameSelectionRoom2").style.display = "none";
    document.getElementById("gameSelectionRoom3").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameHints1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "block";
    document.getElementById("gameHints2").style.display = "block";
    document.getElementById("gameRoom3").style.display = "none";
    document.getElementById("gameHints3").style.display = "none";
}

function gameContentRoom3() {
    document.getElementById("gameSelectionRoom1").style.display = "none";
    document.getElementById("gameSelectionRoom2").style.display = "none";
    document.getElementById("gameSelectionRoom3").style.display = "none";
    document.getElementById("gameRoom1").style.display = "none";
    document.getElementById("gameHints1").style.display = "none";
    document.getElementById("gameRoom2").style.display = "none";
    document.getElementById("gameHints2").style.display = "none";
    document.getElementById("gameRoom3").style.display = "block";
    document.getElementById("gameHints3").style.display = "block";
}

gameStart();
