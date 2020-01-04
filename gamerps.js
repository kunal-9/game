let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    choices = ["r","p","s"];
    comp_choice = (Math.floor(Math.random()*3));
    return choices[comp_choice];
}

function replace(letter){
    if (letter === "r")return "Rock";
    else if (letter === "p")return "Paper";
    else return "Scissors";
}

function win(user,comp){//user and comp just argument if we print user or comp text corresponding to this argument will be printed//
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(user);
    console.log(comp);
    console.log("win");
    result_div.innerHTML = replace(user) + "user".fontsize(2) +"  beats   " + replace(comp) + "comp".fontsize(2) +"   you win!";
}

function lose(user,comp){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    console.log(user);
    console.log(comp);
    console.log("lose");
    result_div.innerHTML = replace(user) + "user".fontsize(2) + "  loses to  " + replace(comp) +  "comp".fontsize(2) + "   you lost...!";
    
}

function draw(user,comp){
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    console.log(user);
    console.log(comp);
    console.log("draw");
    result_div.innerHTML = replace(user) + "user".fontsize(2) +"  equals   " + replace(comp) + "comp".fontsize(2) +"   Its a DRAWW";
    
}

function game(userChoice){

    const computerChoice = getComputerChoice();
    
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
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice,computerChoice);
            break;
        
    }
    
}




function main(){
    rock_div.addEventListener("click",function(){
        game("r");
    })

    paper_div.addEventListener("click",function(){
        game("p");
    })

    scissors_div.addEventListener("click",function(){
        game("s");
    })
}
main();










