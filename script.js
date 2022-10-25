let playerName = prompt("Enter your name.")
alert("Hello " + playerName + "!")

class Fighter{
  constructor(name){
    this.name = name;
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
  constructor(name){
    super(name,healthPoints)
    this.healthPoints = 15;
    this.attackMethod = "kick"
  }
}

let Monster = new Monster("Snorlax")

class Hero extends Fighter{
  constructor(name){
    super(name,healthPoints)
    this.attackMethod = "punch";
  }
}

let Hero = new Hero (playerName)


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
        Hero.attack(Monster);
    if (Monster.healthPoints>0){
      Monster.attack(Hero)
    }
  }
  else if (randomNum(0,2)===1){
    Monster.attack(Hero);
    if (Hero.healthPoints>0){
      Hero.attack(Monster);
    }
  }
}

function playGame(){
    alert(`Hello ${Hero.name}! You are fighting ${Monster.name}! 
    ${Hero.name}'s health is ${Hero.healthPoints}, and ${Monster.name}'s health is ${Monster.healthPoints}!`);
    let roundNumber = 0;
        while(Hero.healthPoints>0 && Monster.healthPoints>0){
        roundNumber++;
        alert(`this is round number ${roundNumber}. 
        ${Hero.name} is at ${Hero.healthPoints} health and ${Monster.name} is at ${Monster.healthPoints} health.`)
        playRound(); 
        }
        if (Hero.healthPoints <= 0) {
          alert(`${Monster.name} wins! You lose.`);
        }
        else if (Monster.healthPoints <= 0) {
    alert(`${Hero.name} wins!!! Congratulations!!`)
    }
  }
  playGame(); 
