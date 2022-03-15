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
    xandoRowThree(inputArray);
    xandoDaigonalOne(inputArray);
    xandoDaigonalTwo(inputArray);
});

resetButton.addEventListener("click", resetBtn);
continueButton.addEventListener("click", continueGame);
endGameButton.addEventListener("click", endGame);

//CHECKING IF THE INPUT IS X AND O
function checkXandO(arr) {
    let check = arr.filter((item) => {
        return (
            item.value.toLowerCase() !== "x" &&
            item.value.toLowerCase() !== "" &&
            item.value.toLowerCase() !== "o"
        );
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
            (arr[0].value.toLowerCase() === "x" &&
                arr[3].value.toLowerCase() === "x" &&
                arr[6].value.toLowerCase() === "x") ||
            (arr[0].value.toLowerCase() === "o" &&
                arr[3].value.toLowerCase() === "o" &&
                arr[6].value.toLowerCase() === "o")
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

    if (
        arr[0].value.toLowerCase() === "x" &&
        arr[3].value.toLowerCase() === "x" &&
        arr[6].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[0].value.toLowerCase() === "o" &&
        arr[3].value.toLowerCase() === "o" &&
        arr[6].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoColumnTwo(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[1].value.toLowerCase() === "x" &&
                arr[4].value.toLowerCase() === "x" &&
                arr[7].value.toLowerCase() === "x") ||
            (arr[1].value.toLowerCase() === "o" &&
                arr[4].value.toLowerCase() === "o" &&
                arr[7].value.toLowerCase() === "o")
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

    if (
        arr[1].value.toLowerCase() === "x" &&
        arr[4].value.toLowerCase() === "x" &&
        arr[7].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[1].value.toLowerCase() === "o" &&
        arr[4].value.toLowerCase() === "o" &&
        arr[7].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoColumnThree(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[2].value.toLowerCase() === "x" &&
                arr[5].value.toLowerCase() === "x" &&
                arr[8].value.toLowerCase() === "x") ||
            (arr[2].value.toLowerCase() === "o" &&
                arr[5].value.toLowerCase() === "o" &&
                arr[8].value.toLowerCase() === "o")
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

    if (
        arr[2].value.toLowerCase() === "x" &&
        arr[5].value.toLowerCase() === "x" &&
        arr[8].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[2].value.toLowerCase() === "o" &&
        arr[5].value.toLowerCase() === "o" &&
        arr[8].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoRowOne(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[0].value.toLowerCase() === "x" &&
                arr[1].value.toLowerCase() === "x" &&
                arr[2].value.toLowerCase() === "x") ||
            (arr[0].value.toLowerCase() === "o" &&
                arr[1].value.toLowerCase() === "o" &&
                arr[2].value.toLowerCase() === "o")
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

    if (
        arr[0].value.toLowerCase() === "x" &&
        arr[1].value.toLowerCase() === "x" &&
        arr[2].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[0].value.toLowerCase() === "o" &&
        arr[1].value.toLowerCase() === "o" &&
        arr[2].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoRowTwo(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[3].value.toLowerCase() === "x" &&
                arr[4].value.toLowerCase() === "x" &&
                arr[5].value.toLowerCase() === "x") ||
            (arr[3].value.toLowerCase() === "o" &&
                arr[4].value.toLowerCase() === "o" &&
                arr[5].value.toLowerCase() === "o")
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

    if (
        arr[3].value.toLowerCase() === "x" &&
        arr[4].value.toLowerCase() === "x" &&
        arr[5].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[4].value.toLowerCase() === "o" &&
        arr[3].value.toLowerCase() === "o" &&
        arr[5].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoRowThree(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[6].value.toLowerCase() === "x" &&
                arr[7].value.toLowerCase() === "x" &&
                arr[8].value.toLowerCase() === "x") ||
            (arr[6].value.toLowerCase() === "o" &&
                arr[7].value.toLowerCase() === "o" &&
                arr[8].value.toLowerCase() === "o")
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

    if (
        arr[6].value.toLowerCase() === "x" &&
        arr[7].value.toLowerCase() === "x" &&
        arr[8].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[6].value.toLowerCase() === "o" &&
        arr[7].value.toLowerCase() === "o" &&
        arr[8].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoDaigonalOne(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[0].value.toLowerCase() === "x" &&
                arr[4].value.toLowerCase() === "x" &&
                arr[8].value.toLowerCase() === "x") ||
            (arr[0].value.toLowerCase() === "o" &&
                arr[4].value.toLowerCase() === "o" &&
                arr[8].value.toLowerCase() === "o")
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

    if (
        arr[0].value.toLowerCase() === "x" &&
        arr[4].value.toLowerCase() === "x" &&
        arr[8].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[0].value.toLowerCase() === "o" &&
        arr[4].value.toLowerCase() === "o" &&
        arr[8].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function xandoDaigonalTwo(arr) {
    let checkWin = arr.every((item, index, arr) => {
        return (
            (arr[2].value.toLowerCase() === "x" &&
                arr[4].value.toLowerCase() === "x" &&
                arr[6].value.toLowerCase() === "x") ||
            (arr[2].value.toLowerCase() === "o" &&
                arr[4].value.toLowerCase() === "o" &&
                arr[6].value.toLowerCase() === "o")
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

    if (
        arr[2].value.toLowerCase() === "x" &&
        arr[4].value.toLowerCase() === "x" &&
        arr[6].value.toLowerCase() === "x"
    ) {
        display = xscore++;
        xScore.innerHTML = display;
    }

    if (
        arr[2].value.toLowerCase() === "o" &&
        arr[4].value.toLowerCase() === "o" &&
        arr[6].value.toLowerCase() === "o"
    ) {
        display = oscore++;
        oScore.innerHTML = display;
    }
}

function resetBtn() {
    inputArray.forEach((item) => {
        item.value = "";
        item.classList.remove("gameover");
        item.classList.remove("jackpot");
    });
    oscore = 1;
    xscore = 1;
    oScore.innerHTML = "0";
    xScore.innerHTML = "0";
    // endGameScore.innerHTML = "";
    endGameScore.style.display = "none";
    continueButton.classList.remove("gameover");
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
        inputArray.forEach((item) => {
            item.classList.add("gameover");
            continueButton.classList.add("gameover");
        });
    } else if (xScore.innerHTML > oScore.innerHTML) {
        endGameScore.style.display = "block";
        winner.innerHTML = "X";
        inputArray.forEach((item) => {
            item.classList.add("gameover");
            continueButton.classList.add("gameover");
        });
    } else {
        endGameScore.style.display = "block";
        endGameScore.innerHTML = "No winner! It's a Tie";

        continueButton.classList.add("gameover");

        inputArray.forEach((item) => {
            item.classList.add("gameover");
        });
    }
}