function getComputerChoice(){
    const comp = Math.random() * 3;
    if (comp < 1){
        return "rock";
    } else if (comp < 2){
        return "paper";
    } else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, Paper, Scissors?");
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    function playRound(humanChoice, computerChoice){
        const humanAnswer = humanChoice.toLowerCase();
        if (humanAnswer === computerChoice){
            return "It's a Tie!";
        } else if (
            (humanAnswer === "rock" && computerChoice === "scissors") ||
            (humanAnswer === "paper" && computerChoice === "rock") ||
            (humanAnswer === "scissors" && computerChoice === "paper")){
            humanScore++;
        return "You Win!";
            } else{
                computerScore++;
                return "You Lose!";
            }
    }

    console.log(playRound(humanChoice, computerChoice));
    console.log(humanScore);
    console.log(computerScore);
}

playGame();
playGame();
playGame();
playGame();
playGame();
