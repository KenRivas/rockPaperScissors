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

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

function playRound(pSelection, cSelection){
    pSelection = toTitleCase(pSelection);
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

function game(){
    for(i=1; i<=5; i++){
        let playerPoints = 0;
        let playerInput = prompt("Please enter a move:", "Harry Potter");
        let result = playRound(playerInput, computerPlay());
        console.log(result);
        if(result = "You've won, rock beats scissors" || "You've won! Paper beats rocks" || "You've won! Scissors beats papers"){
            playerPoints += 1;
        }
    }
    if(playerPoints >= 3){
        console.log("Congrats! You've won the most rounds!")
    }
    else{
        console.log("Sorry, you've failed to win 3 rounds, you've lost, better try next time!")
    }
}
game();
