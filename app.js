var scores, roundScore, activePlayer, gamePlaying, lastDice, winScore ;



init()

 
// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#current-"+activePlayer).textContent = dice; 


// adding an event listener for when the dice is rolled
document.querySelector(".btn-roll").addEventListener("click", function() {

  if (gamePlaying) {

    // 1. Random Number Generation
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  //2.Display the result
  
  document.querySelector("#dice-1").style.display = "block";
  document.querySelector("#dice-2").style.display = "block";
  document.querySelector("#dice-1").src = "dice" + dice1 + ".png";
  document.querySelector("#dice-2").src = "dice" + dice2 + ".png";

  //3. Update the round score if the rolled number is not a 1 
  if ( dice1 !== 1 && dice2 !== 1) {
    //Add score
    roundScore += dice1 + dice2; 
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //  Next Player
    nextPlayer();
  }

  // //3. Update the round score if the rolled number is not a 1 and when you have consecutive 6
  // if (dice == 6 && lastDice == 6) {
  //   scores[activePlayer] = 0;
  //   document.querySelector("#score-"+ activePlayer).textContent = "0";
  //   nextPlayer();
  // }
  // else if ( dice !== 1) {
  //   //Add score
  //   roundScore += dice; 
  //   document.querySelector("#current-" + activePlayer).textContent = roundScore;
  // } else {
  //   //  Next Player
  //   nextPlayer();
  // }
  // lastDice = dice;


  }
  
})

document.querySelector(".btn-hold").addEventListener("click", function(){ 
  if (gamePlaying) {
    // Add current score to Global Score
  scores[activePlayer] += roundScore;

  // update the UI
  document.querySelector("#score-"+ activePlayer).textContent = scores[activePlayer];

  var input = document.querySelector(".final-score").value;

  if (input) {
    winScore = input;
  } else {
    winScore = 100
  }

  // Check if the game is won
  if (scores[activePlayer] >= winScore) {
    document.querySelector("#name-" +activePlayer).textContent = "Winner";
    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    gamePlaying = false;
  } else {
    // Next Player
    nextPlayer();
  }

  }
  
  
})


function nextPlayer() {
  //  Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  // Setting all scores to zero again
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Setting the active player to change accordingly
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Making the dice disappear when you roll a one
  // document.querySelector(".dice").style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  // winScore = prompt("What do you want the winning score to be ??");

  // Hiding the dice
document.querySelector("#dice-1").style.display = "none";
document.querySelector("#dice-2").style.display = "none";

//Setting all scores to zero
document.getElementById("score-0").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Setting player names
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

// removing the winner and active classes
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

// Making the first player the active player for the start of the game
document.querySelector(".player-0-panel").classList.add("active");

}