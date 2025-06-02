let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choice = ['r','p','s'];
    const randomNumer = (Math.floor(Math.random() * 3));
    return choice[randomNumer];
}
function convertToword(letter){
    if (letter === 'r'){
        return "Rock";
    }
    if (letter === 'p'){
        return "Paper";
    }
    if (letter === 's'){
        return "Scissors";
    }
}
function win(userChoice,computerChoice){
    console.log("USER WINS!");
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "<sup><small>user</small></sup>";
    const smallComWord = "<sup><small>comp</small></sup>";
    switch(userChoice + computerChoice){
        case "rs":
            result_p.innerHTML = `${convertToword(userChoice)}${smallUserWord} breaks ${convertToword(computerChoice)}${smallComWord}. You win! 🔥`;
            break;
        case "pr":
            result_p.innerHTML = `${convertToword(userChoice)}${smallUserWord} covers ${convertToword(computerChoice)}${smallComWord}. You win! 🔥`;
            break;
        case "sp":
            result_p.innerHTML = `${convertToword(userChoice)}${smallUserWord} cuts ${convertToword(computerChoice)}${smallComWord}. You win! 🔥`;
        case "pr":
    }
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 600);
}
function lose(userChoice,computerChoice){
    console.log("COMPUTER WINS ! USER LOSES!");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "<sup><small>user</small></sup>";
    const smallComWord = "<sup><small>comp</small></sup>";
    switch(userChoice + computerChoice){
        case "rs":
            result_p.innerHTML = `${convertToword(computerChoice)}${smallComWord} breaks ${convertToword(userChoice)}${smallUserWord}. You lose! 😭`;
            break;
        case "pr":
            result_p.innerHTML = `${convertToword(computerChoice)}${smallComWord} covers ${convertToword(userChoice)}${smallUserWord}. You lose! 😭`;
        case "sp":
            result_p.innerHTML = `${convertToword(computerChoice)}${smallComWord} cuts ${convertToword(userChoice)}${smallUserWord}. You lose! 😭`;
        case "pr":
    }
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 600);
}
function draw(userChoice){
    console.log("Its a tie");
    result_p.innerHTML = "It's a tie !";
    document.getElementById(userChoice).classList.add("yellow-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("yellow-glow"), 600);
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("computer choice : " + computerChoice);
    console.log("user choice : " + userChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);            
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){game("r")});
    paper_div.addEventListener('click',function(){game("p")});
    scissors_div.addEventListener('click',function(){game("s")});
}

main();