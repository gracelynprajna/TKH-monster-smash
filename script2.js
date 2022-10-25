let playerName = prompt("Enter your name.")
alert("Hello " + playerName + "!")

class Fighter{
  constructor(healthPoints,attackMethod){                                            
    this.healthPoints = healthPoints;                
    this.attackMethod = attackMethod;
  }
  attack(Fighter){
    let attackPoints = randomNum(1,6);
    Fighter.healthPoints = Fighter.healthPoints - attackPoints;
    alert(`${this.name} attacked ${Fighter.name} and did did ${attackPoints} damage! ${Fighter.name} has ${Fighter.healthPoints} health left!`)
  }
}

class Monster extends Fighter{
  constructor(name,healthPoints,attackMethod){    
    super(healthPoints,attackMethod)              
    this.name=name
  }
}

myMonster = new Monster("Snorlax",15,"kick") 
class Hero extends Fighter{
    
  constructor(name,healthPoints,attackMethod){    
    super(healthPoints,attackMethod)
    this.name=name
  }
}

 myHero = new Hero (playerName,15,"punch")


function randomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) 
  }


/*function playerAttack(){
let attackPoints = randomNum(1,6);
monsterHealth = monsterHealth - attackPoints;
alert(`Player attacked monster and did ${attackPoints} damage! Monster has ${monsterHealth} health left!`) 
}
function monsterAttack(){
let attackPoints = randomNum(1,6);
playerHealth = playerHealth - attackPoints;
alert(`Monster attacked player and did did ${attackPoints} damage! ${playerName} has ${playerHealth} health left!`)
}
*/

function playRound(){
    randomNum(0,2);
    if (randomNum(0,2)===0){
        myHero.attack(myMonster);
    if (myMonster.healthPoints>0){
      myMonster.attack(myHero)
    }
  }
  else if (randomNum(0,2)===1){
    myMonster.attack(myHero);
    if (myHero.healthPoints>0){
      myHero.attack(myMonster);
    }
  }
}            

function playGame(){          
    alert(`Hello ${myHero.name}! You are fighting ${myMonster.name}! 
    ${myHero.name}'s health is ${myHero.healthPoints}, and ${myMonster.name}'s health is ${myMonster.healthPoints}!`);
    let roundNumber = 0;
        while(myHero.healthPoints>0 && myMonster.healthPoints>0){
        roundNumber++;
        alert(`this is round number ${roundNumber}. 
        ${myHero.name} is at ${myHero.healthPoints} health and ${myMonster.name} is at ${myMonster.healthPoints} health.`)
        playRound(); 
        }
        if (myHero.healthPoints <= 0) {
          alert(`${myMonster.name} wins! You lose.`);
        }
        else if (myMonster.healthPoints <= 0) {
    alert(`${myHero.name} wins!!! Congratulations!!`)
    }
  }
  playGame(); 