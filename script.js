let playerName = prompt("Enter your name.")
alert("Hello " + playerName + "!")

let playerHealth = 15;

let monsterName = "Snorlax";

let monsterHealth = 15;

function randomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) 
  }
  
let playerAttackPoints = randomNum(1,6);

function playerAttack(){
}

monsterHealth = monsterHealth - playerAttackPoints

    
alert(`Player attacked monster and did ${playerAttackPoints} damage! Monster has ${monsterHealth} health left!`) 

let monsterAttackPoints = randomNum(1,6);

function monsterAttack(){

}

playerHealth = playerHealth - monsterAttackPoints

alert(`Monster attacked player and did did ${monsterAttackPoints} damage! ${playerName} has ${playerHealth} health left!`)


function playRound() {
  return randomNum(0,2)
}

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

  function playGame(){
    alert(`Hello, ${playerName}! You are fighting ${monsterName}! 
    Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`);
  }
  
let roundNumber = 0
while(playerHealth<=0 || monsterHealth<=0){
    roundNumber++;
    playRound();
    alert(`this is round number ${roundNumber}. 
    ${playerName} is at ${playerHealth} health and ${monsterName} is at ${monsterHealth} health.`); 
    }

if (playerHealth === 0) {
    alert(`${monsterName} wins! You lose.`);
  }
  else if (monsterHealth === 0) {
    alert(`${playerName} wins!!! Congratulations!!`)
  }

  playGame(); 


