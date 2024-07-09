let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw. PLay again. 🤷 ";
    msg.style.backgroundColor = "#75069d";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreUpdate.innerText = userScore;
        msg.innerText = `Congratulations!🎉. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScoreUpdate.innerText = compScore; 
        msg.innerText = `You lose 🙁. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate comp choice -> modular
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "scissors"){
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        else {
            //scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});