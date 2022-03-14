const boxOne = document.querySelector("#box1");
const boxTwo = document.querySelector("#box2");
const boxThree = document.querySelector("#box3");
const boxFour = document.querySelector("#box4");
const boxFive = document.querySelector("#box5");
const boxSix = document.querySelector("#box6");
const boxSeven = document.querySelector("#box7");
const boxEight = document.querySelector("#box8");
const boxNine = document.querySelector("#box9");
const endGameScore = document.querySelector("#endgame");
const winner = document.querySelector("#winner");
const resetButton = document.querySelector("#reset");
const continueButton = document.querySelector("#continue");
const endGameButton = document.querySelector("#endgamebtn");

// const demoWarning = document.querySelector(".demo");
const oScore = document.querySelector(".Oscore");
const xScore = document.querySelector(".Xscore");

const inputArray = [
    boxOne,
    boxTwo,
    boxThree,
    boxFour,
    boxFive,
    boxSix,
    boxSeven,
    boxEight,
    boxNine,
];

let xscore = 1;
let oscore = 1;

document.addEventListener("keyup", () => {
    checkXandO(inputArray);

    // CHECK X AND O GAME FUNCTIONS
    xandoColumnOne(inputArray);
    xandoColumnTwo(inputArray);
    xandoColumnThree(inputArray);
    xandoRowOne(inputArray);
    xandoRowTwo(inputArray);
    xandoDaigonalOne(inputArray);
    xandoDaigonalTwo(inputArray);
});

resetButton.addEventListener("click", resetBtn);
continueButton.addEventListener("click", continueGame);
endGameButton.addEventListener("click", endGame);

//CHECKING IF THE INPUT IS X AND O
function checkXandO(arr) {
    let check = arr.filter((item) => {
        return item.value !== "x" && item.value !== "" && item.value !== "o";
    });

    if (check.length > 0) {
        return (check[0].value = "");
    }
    return check;
}

//CHECKING IF X AND O GAME IS WON
function xandoColumnOne(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[0].value === "x" && arr[3].value === "x" && arr[6].value === "x") ||
            (arr[0].value === "o" && arr[3].value === "o" && arr[6].value === "o")
        );
    });

    if (checkWin == true) {
        arr[0].classList.add("jackpot");
        arr[3].classList.add("jackpot");
        arr[6].classList.add("jackpot");
        arr[1].classList.add("gameover");
        arr[2].classList.add("gameover");
        arr[4].classList.add("gameover");
        arr[5].classList.add("gameover");
        arr[7].classList.add("gameover");
        arr[8].classList.add("gameover");
    }

    if (arr[0].value === "x" && arr[3].value === "x" && arr[6].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[0].value === "o" && arr[3].value === "o" && arr[6].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoColumnTwo(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[1].value === "x" && arr[4].value === "x" && arr[7].value === "x") ||
            (arr[1].value === "o" && arr[4].value === "o" && arr[7].value === "o")
        );
    });

    if (checkWin == true) {
        arr[1].classList.add("jackpot");
        arr[4].classList.add("jackpot");
        arr[7].classList.add("jackpot");
        arr[0].classList.add("gameover");
        arr[2].classList.add("gameover");
        arr[3].classList.add("gameover");
        arr[5].classList.add("gameover");
        arr[6].classList.add("gameover");
        arr[8].classList.add("gameover");
    }

    if (arr[1].value === "x" && arr[4].value === "x" && arr[7].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[1].value === "o" && arr[4].value === "o" && arr[7].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoColumnThree(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[2].value === "x" && arr[5].value === "x" && arr[8].value === "x") ||
            (arr[2].value === "o" && arr[5].value === "o" && arr[8].value === "o")
        );
    });

    if (checkWin == true) {
        arr[2].classList.add("jackpot");
        arr[5].classList.add("jackpot");
        arr[8].classList.add("jackpot");
        arr[0].classList.add("gameover");
        arr[1].classList.add("gameover");
        arr[3].classList.add("gameover");
        arr[4].classList.add("gameover");
        arr[6].classList.add("gameover");
        arr[7].classList.add("gameover");
    }

    if (arr[2].value === "x" && arr[5].value === "x" && arr[8].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[2].value === "o" && arr[5].value === "o" && arr[8].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoRowOne(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[0].value === "x" && arr[1].value === "x" && arr[2].value === "x") ||
            (arr[0].value === "o" && arr[1].value === "o" && arr[2].value === "o")
        );
    });

    if (checkWin == true) {
        arr[0].classList.add("jackpot");
        arr[1].classList.add("jackpot");
        arr[2].classList.add("jackpot");
        arr[5].classList.add("gameover");
        arr[8].classList.add("gameover");
        arr[3].classList.add("gameover");
        arr[4].classList.add("gameover");
        arr[6].classList.add("gameover");
        arr[7].classList.add("gameover");
    }

    if (arr[0].value === "x" && arr[1].value === "x" && arr[2].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[0].value === "o" && arr[1].value === "o" && arr[2].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoRowTwo(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[3].value === "x" && arr[4].value === "x" && arr[5].value === "x") ||
            (arr[3].value === "o" && arr[4].value === "o" && arr[5].value === "o")
        );
    });

    if (checkWin == true) {
        arr[3].classList.add("jackpot");
        arr[4].classList.add("jackpot");
        arr[5].classList.add("jackpot");
        arr[0].classList.add("gameover");
        arr[8].classList.add("gameover");
        arr[1].classList.add("gameover");
        arr[2].classList.add("gameover");
        arr[6].classList.add("gameover");
        arr[7].classList.add("gameover");
    }

    if (arr[3].value === "x" && arr[4].value === "x" && arr[5].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[4].value === "o" && arr[3].value === "o" && arr[5].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoRowThree(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[6].value === "x" && arr[7].value === "x" && arr[8].value === "x") ||
            (arr[6].value === "o" && arr[7].value === "o" && arr[8].value === "o")
        );
    });

    if (checkWin == true) {
        arr[6].classList.add("jackpot");
        arr[7].classList.add("jackpot");
        arr[8].classList.add("jackpot");
        arr[0].classList.add("gameover");
        arr[4].classList.add("gameover");
        arr[1].classList.add("gameover");
        arr[2].classList.add("gameover");
        arr[3].classList.add("gameover");
        arr[5].classList.add("gameover");
    }

    if (arr[6].value === "x" && arr[7].value === "x" && arr[8].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[6].value === "o" && arr[7].value === "o" && arr[8].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoDaigonalOne(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[0].value === "x" && arr[4].value === "x" && arr[8].value === "x") ||
            (arr[0].value === "o" && arr[4].value === "o" && arr[8].value === "o")
        );
    });

    if (checkWin == true) {
        arr[0].classList.add("jackpot");
        arr[4].classList.add("jackpot");
        arr[8].classList.add("jackpot");
        arr[2].classList.add("gameover");
        arr[7].classList.add("gameover");
        arr[6].classList.add("gameover");
        arr[1].classList.add("gameover");
        arr[3].classList.add("gameover");
        arr[5].classList.add("gameover");
    }

    if (arr[0].value === "x" && arr[4].value === "x" && arr[8].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[0].value === "o" && arr[4].value === "o" && arr[8].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoDaigonalTwo(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[2].value === "x" && arr[4].value === "x" && arr[6].value === "x") ||
            (arr[2].value === "o" && arr[4].value === "o" && arr[6].value === "o")
        );
    });

    if (checkWin == true) {
        arr[2].classList.add("jackpot");
        arr[4].classList.add("jackpot");
        arr[6].classList.add("jackpot");
        arr[8].classList.add("gameover");
        arr[7].classList.add("gameover");
        arr[1].classList.add("gameover");
        arr[0].classList.add("gameover");
        arr[3].classList.add("gameover");
        arr[5].classList.add("gameover");
    }

    if (arr[2].value === "x" && arr[4].value === "x" && arr[6].value === "x") {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (arr[2].value === "o" && arr[4].value === "o" && arr[6].value === "o") {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function resetBtn() {
    inputArray.forEach((item) => {
        item.value = "";
        item.classList.remove("gameover");
        item.classList.remove("jackpot");
        oScore.innerHTML = 0;
        xScore.innerHTML = 0;
    });
}

function continueGame() {
    inputArray.forEach((item) => {
        item.value = "";
        item.classList.remove("gameover");
        item.classList.remove("jackpot");
    });
}

function endGame() {
    if (oScore.innerHTML > xScore.innerHTML) {
        endGameScore.style.display = "block";
        winner.innerHTML = "O";
    } else if (xScore.innerHTML > oScore.innerHTML) {
        endGameScore.style.display = "block";
        winner.innerHTML = "X";
    } else {
        endGameScore.style.display = "block";

        endGameScore.innerHTML = "No winner! It's a Tie";
        continueButton.classList.add("gameover");

        inputArray.forEach((item) => {
            if ((item.value = "")) {
                item.classList.add("gameover");
            }
        });
    }
}