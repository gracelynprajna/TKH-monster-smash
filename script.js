
//declare a variable named playerName
const playerName = prompt("Enter your name.");


alert("Hello " + playerName + "!");

//declare a variable named playerHealth and set it equal to the number value 15
let playerHealth = 15;

//assign a name of a monster (ex:'Werewolf') as a string to a variable named monsterName
const monsterName = "Snorlax";

//declare a variable named monsterHealth and set it equal to the number value 15
let monsterHealth = 15;

//random integer function
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
//Math.floor rounds down and Math.ceil round down


function playerAttack(){
//use randomNum to generate attack points value between 1-5 and save the value to a variable named playerAttackPoints 
let playerAttackPoints = randomNum(1,6);
monsterHealth = monsterHealth - playerAttackPoints;
//OR you can put monsterHealth -=playerAttackPoints
alert(`Player attacked monster and did ${playerAttackPoints} damage! Monster has ${monsterHealth} health left!`);
}


function monsterAttack(){
let monsterAttackPoints = randomNum(1,6);
playerHealth = playerHealth - monsterAttackPoints;
alert(`Monster attacked player and did did ${monsterAttackPoints} damage! ${playerName} has ${playerHealth} health left!`);
}

function playRound(){
    randomNum(0,2);
    if (randomNum(0,2)===0){
        playerAttack();
    if (monsterHealth>0){
      monsterAttack()
    }
  }
  else if (randomNum(0,2)===1){
    monsterAttack();
    if (playerHealth>0){
      playerAttack();
    }
  }
}

function playGame(){
    alert(`Hello ${playerName}! You are fighting ${monsterName}! 
    ${playerName}'s health is ${playerHealth}, and ${monsterName}'s health is ${monsterHealth}!`);
    let roundNumber = 0;
        while(playerHealth>0 && monsterHealth>0){
        roundNumber++;
        alert(`this is round number ${roundNumber}. 
        ${playerName} is at ${playerHealth} health and ${monsterName} is at ${monsterHealth} health.`)
        playRound(); 
        }
        if (playerHealth <= 0) {
          alert(`${monsterName} wins! You lose.`);
        }
        else if (monsterHealth <= 0) {
    alert(`${playerName} wins!!! Congratulations!!`)
    }
  }
  playGame(); 
