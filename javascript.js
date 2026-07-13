function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNumber = Math.random() * 3;

        if (randomNumber < 1) {
            return "rock";
        } else if (randomNumber < 2) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function getHumanChoice() {
        let answer = prompt("Rock, paper, scissors: ");
        return answer;
    }

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice){
            return "It's a Tie!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
            return "You Win!";
        } else{
            return "You Lose!";
        }
    }

    const humanOption = getHumanChoice();
    const computerOption = getComputerChoice();

    console.log(playRound(humanOption, computerOption));

}

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());