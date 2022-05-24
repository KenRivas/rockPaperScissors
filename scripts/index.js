function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    let move = " ";
    if(rand === 0){
        move = "Rock";
    }
    else if(rand === 1){
        move = "Paper"
    }
    else{
        move = "Scissors";
    }
    return move;
}

function playRound(pSelection, cSelection){
    let result = " ";
    if(pSelection === "Rock" && cSelection === "Scissors"){
        result = "You've won, rock beats scissors";
    }
    else if(pSelection === "Rock" && cSelection === "Paper"){
        result = "You've lost! Paper beats rocks";
    }
    else if(pSelection === "Paper" && cSelection === "Rock"){
        result = "You've won! Paper beats rocks";
    }
    else if(pSelection === "Paper" && cSelection === "Scissors"){
        result = "You've lost! Scissors beats papers";
    }
    else if(pSelection === "Scissors" && cSelection === "Rock"){
        result = "You've lost! Rocks beats scissors";
    }
    else if(pSelection === "Scissors" && cSelection === "Paper"){
        result = "You've won! Scissors beats papers";
    }
    else{
        result = `Tie, both used ${pSelection}`;
    }
    return result;
}
console.log(playRound("Scissors", computerPlay()));