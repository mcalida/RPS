document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissor').onclick = playRound;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    var userChoice = this.id;
    console.log("User picked " + userChoice);
    let cpuChoice = getComputerChoice();
    console.log("Cpu picked " + cpuChoice);
    document.getElementById('instruction').style.visibility = "hidden";
    document.getElementById('outcome').innerHTML = userChoice + " vs " + cpuChoice;
    if ((userChoice == "rock" && cpuChoice == "scissor") ||
        (userChoice == "paper" && cpuChoice == "rock") ||
        (userChoice == "scissor" && cpuChoice == "paper")) {
        document.getElementById("result").innerHTML = "you win!";
    }
    else if ((userChoice == "rock" && cpuChoice == "rock") ||
        (userChoice == "paper" && cpuChoice == "paper") ||
        (userChoice == "scissor" && cpuChoice == "scissor")) {
        document.getElementById("result").innerHTML = "Its a tie!";
    }
    else {
        document.getElementById("result").innerHTML = "You Lost!";
    }
}



