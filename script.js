//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
  let playerName = prompt("Enter your name.")
  alert("Hello " + playerName + "!")
  //declare a variable named playerHealth and set it equal to the number value 15
  let playerHealth = 15;

  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
  let monsterName = "Snorlax";
  //declare a variable named monsterHealth and set it equal to the number value 15
  let monsterHealth = 15;
//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints

let playerAttackPoints;
function playerAttack(){
  return playerAttackPoints = randomNum(1,6);
}

//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
monsterHealth = monsterHealth - playerAttackPoints
  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster 
  alert(`Player attacked monster!`)
  // 2. how much damage the player did
  alert(`Monster did ${playerAttackPoints} damage!`) 
  // 3. how much health the monster has 
  alert(`Monster has ${monsterHealth} health left!`)


let monsterAttackPoints =
function monsterAttack(){
  return monsterAttackPoints = randomNum(1,5)

}


//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints

//subtract monsterAttackPoints from playerHealth and update the playerHealth variable 

playerHealth = playerHealth - monsterAttackPoints

alert (`Monster attacked player and did ${monsterAttackPoints} damage! ${playerName} has ${playerHealth} health left.`)


function playRound() {
  return randomNum(0,2)
}
  //use randomNum to return either 0 or 1
  
  //0 = player goes first, 1 = monster goes first
  if (randomNum()===0){
    alert(`${playerName}, make the first move.`);
    playerAttack();
    if (monsterHealth>0){
      monsterAttack()
    }
  }
  else if (randomNum()===1){
    alert(`${monsterName} makes the first move.`);
    monsterAttack()
    if (playerHealth>0){
      playerAttack()
    }
  }

  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 


function playGame() {
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
while(playerHealth<=0 || monsterHealth<=0){
  roundNumber++;
  alert(`this is round number ${roundNumber}. ${playerName} is at ${playerHealth} health and ${monsterName} is at ${monsterHealth} health.`); 
  playRound();
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
}
if (playerHealth === 0) {
  alert(`${monsterName} wins! You lose.`);
}
else if (monsterHealth === 0) {
  alert(`${playerName} wins!!! Congratulations!!`)
}
//call playGame to start game
playGame(); 
