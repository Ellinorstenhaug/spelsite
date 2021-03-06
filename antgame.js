/*  Har läst en tutorial på hur man bygger ett snake-spel med endast javascript. 
Länken: https://medium.freecodecamp.org/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e

-Bytt ut bilder så att istället för snake är det myror som kryper omkring och rekryterar kompisar. 
-Lade till antal vänner den rekryterar och antal poäng man får. Dessa sammanställs sedan i en lokalstorage där också alla poäng från respektive spel samlas. 
-Lade till ljud när den hämtar en kompis och när den krachar.
*/

// Färger till canvas och mask
const GAME_SPEED = 100;
const CANVAS_BORDER_COLOUR = '#FF5E35'
const CANVAS_BACKGROUND_COLOUR = '#FF5E35'
const MYRA_COLOUR = '#FF5E35';
const MYRA_BORDER_COLOUR = '#C9463D';
const FOOD_COLOUR = '#962E40';
const FOOD_BORDER_COLOUR = '#962E40';

let antScore = 0;

// Myran börjar ensam.
let myra = [{
  x: 140,
  y: 140
}, ];

let takeFriend = new Audio('sounds/obi-wan-hello-there.mp3');
let lostFriends = new Audio('sounds/Game-Death.mp3');
let totalSeconds = 0;
let friend = 0;
let box = 20;
// Poäng
let score = 0;
// När den är true ändrar myran håll
let changingDirection = false;
// Kompis x-coordinate (vilken x-koordinat som kompisen är på)
let foodX;
// Kompis y-coordinate (vilken y-koordinat som kompisen är på)
let foodY;
// Horizontal hastighet
let dx = 20; // Myran börjar krypa i x-led
// Vertical hastighet
let dy = 0;


// Bestämmer storleken på canvas och retunerar en 2dimensionell canvas
let gameCanvas = document.getElementById("gameCanvas");
let context = gameCanvas.getContext("2d");

context.fillStyle = CANVAS_BACKGROUND_COLOUR;
context.strokeStyle = CANVAS_BORDER_COLOUR;

context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
context.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

let timer = 0;

function setTimer() {
  document.getElementById('timer').innerHTML = totalSeconds++;
}

function stopTimer() {
  clearInterval(timer);
}
// Startar spelet
document.addEventListener("click", startGame());

function startGame() {
  totalSeconds = 0;
  timer = setInterval(setTimer, 1000);
  setTimer();

  friend = 0;
  countFriends();

  myra = [{
    x: 140,
    y: 140
  }, ];
  // Startar spelet med main()
  main();
  // Startar med en myra
  createFriend();
}

function main() {
  // Om man krashar masken så stoppar den direkt. Och spelar krashljud.
  if (ifGameOver()) {
    console.log(totalSeconds + 'if Game over');
    console.log(antScore, snake)
    webStorage.saveScore(antScore, snake);
    return lostFriends.play() && stopTimer();
  }
  setTimeout(function onTick() {
    changingDirection = false;
    clearCanvas();
    drawFriend();
    makingFriends();
    drawAnt();
    // Kör main igen för att den ska bli en loop
    main();
  }, GAME_SPEED)
}

/* Code refactoring is the process of restructuring existing computer code, without changing its external behaviour. */
function clearCanvas() {
  context.fillStyle = CANVAS_BACKGROUND_COLOUR;
  context.strokeStyle = CANVAS_BORDER_COLOUR;
  context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  context.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

const img_friend = document.getElementById('source_friend');

function drawFriend() {
  console.log('img_friend');
  context.drawImage(img_friend, foodX, foodY);
}

function makingFriends() {
  const head = {
    x: myra[0].x + dx,
    y: myra[0].y + dy
  };
  // Unshift adderar element i början av masken.
  myra.unshift(head);
  // Pop tar bort en ruta i slutet på masken.
  const didEatFood = myra[0].x === foodX && myra[0].y === foodY;
  if (didEatFood) {
    //countScore(); // Adderar poäng
    takeFriend.play();
    createFriend();
    countFriends(); // Skapar nytt äpple på en annan plats efter som masken har ätit upp den.
  } else {
    myra.pop();
  }
}

function ifGameOver() {
  for (let i; i < myra.length; i++) {
    if (myra[i].x === myra[0].x && myra[i].y === myra[0].y)
      console.log('IfGameOver snackarrrr')
    return true;
  }

  const crashLeftWall = myra[0].x < 0;
  const crashRightWall = myra[0].x > gameCanvas.width - box;
  const crashTopWall = myra[0].y < 0;
  const crashBottomWall = myra[0].y > gameCanvas.height - box;

  return crashLeftWall || crashRightWall || crashTopWall || crashBottomWall
}

// randomPlace generarar slumpmässiga tal som sedan createApple använder tillsammans med drawApple
function randomPlace(min, max) {
  let random = Math.round((Math.random() * (max - min) + min) / box) * box;
  return random
}

function createFriend() {
  foodX = randomPlace(0, gameCanvas.width - box);
  foodY = randomPlace(0, gameCanvas.height - box);
};


function countFriends() {
  antScore = friend * 10;
  let score = document.getElementById('score');
  score.innerHTML = antScore;
  document.getElementById('friend-count').innerHTML = friend++;

}
// Loopar ut myran på canvas
function drawAnt() {
  myra.forEach(drawAntPart);
}

const img_horizontal = document.getElementById('horizontal');
const img_vertical = document.getElementById('vertical');

function drawAntPart(myraPart) {
  context.drawImage(img_horizontal, myraPart.x, myraPart.y);
}

document.addEventListener("keydown", changeDirection)

function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  if (changingDirection) return;
  changingDirection = true;
  const keyPressed = event.keyCode;

  const goingUp = dy === -box;
  const goingDown = dy === box;
  const goingRight = dx === box;
  const goingLeft = dx === -box;
  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -box;
    dy = 0;
  }
  if (keyPressed === UP_KEY && !goingUp) {
    dx = 0;
    dy = -box;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = box;
    dy = 0;
  }
  if (keyPressed === DOWN_KEY && !goingDown) {
    dx = 0;
    dy = box;
  }
}