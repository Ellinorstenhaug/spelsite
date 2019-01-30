// Färger till canvas och mask

const GAME_SPEED = 100;
const CANVAS_BORDER_COLOUR = '#330136'
const CANVAS_BACKGROUND_COLOUR = 'white'
const MYRA_COLOUR = '#FF5E35';
const MYRA_BORDER_COLOUR = '#C9463D';
const FOOD_COLOUR = '#962E40';
const FOOD_BORDER_COLOUR = '#962E40';


// Myran börjar ensam.
let myra = [
    {x: 140, y: 140},
  ];

let takeFriend = new Audio('sounds/obi-wan-hello-there.mp3');
let lostFriends = new Audio('sounds/Game-Death.mp3');
let box = 20;
// Poäng
let score = 0;
// När den är true ändrar masken håll
let changingDirection = false;
// Food x-coordinate (vilken x-koordinat som maten ligger på)
let foodX;
// Food y-coordinate (vilken y-koordinat som maten ligger på)
let foodY;
// Horizontal hastighet
let dx = 20; // Masken börjar krypa i x-led
// Vertical hastighet
let dy = 00;

// Bestämmer storleken på canvas och retunerar en 2dimensionell canvas
let gameCanvas = document.getElementById("gameCanvas");
let context = gameCanvas.getContext("2d");

context.fillStyle = CANVAS_BACKGROUND_COLOUR;
context.strokeStyle = CANVAS_BORDER_COLOUR;

context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
context.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

document.addEventListener("click", function(){
  // Startar spelet med main()
  main();
  // Startar med ett Äpple
  createFriend();
  // Timer
  let totalSeconds = 0;
  setInterval(setTime, 1000);
  function setTime() {
  document.getElementById('timer').innerHTML = ++totalSeconds;
}
});

function main() {
  // Om man krashar masken så stoppar den direkt. Och spelar krashljud.
  if (ifGameOver()){
    return lostFriends.play();
  }
  setTimeout(function onTick() {
    changingDirection = false;
    clearCanvas();
    drawFriend();
    console.log(myra[0].x + '  myra[0].x');
    console.log(myra[0].y + '  myra[0].y');
    console.log(foodX + ' FoodX');
    console.log(foodY + ' FoodY');
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
  /* context.fillStyle = FOOD_COLOUR;
  context.strokestyle = FOOD_BORDER_COLOUR;
  context.fillRect(foodX, foodY, 20, 20);
  context.strokeRect(foodX, foodY, 20, 20); */
 }

function makingFriends() {
  const head = {x: myra[0].x + dx, y: myra[0].y + dy};
  // Unshift adderar element i början av masken.
  myra.unshift(head);
  // Pop tar bort en ruta i slutet på masken.
  const didEatFood = myra[0].x === foodX && myra[0].y === foodY;
  if (didEatFood) {
    document.getElementById('score').innerHTML = score += 10; // Adderar poäng
    //document.getElementById('score').innerHTML = score; // Visar det på hemsidan
    takeFriend.play();
    createFriend();
    countFriends()// Skapar nytt äpple på en annan plats efter som masken har ätit upp den.
  } else {
    myra.pop();
  }
}

function ifGameOver() {
  for (let i = 4; i < myra.length; i++) {
    if (myra[i].x === myra[0].x && myra[i].y === myra[0].y) 
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
  let random = Math.round((Math.random() * (max-min) + min) / box) * box;

  console.log(random + ' random');
  return random
}


function createFriend() {
  foodX = randomPlace(0, gameCanvas.width - box);
  foodY = randomPlace(0, gameCanvas.height - box); 
};


// Räknar antalet äpplen som masken äter
let friend = 0;
function countFriends() {
  document.getElementById('friend-count').innerHTML = ++friend;
}
// Loopar ut masken på skärmen
function drawAnt() {
  myra.forEach(drawAntPart);
}

const img_horizontal = document.getElementById('horizontal');
const img_vertical = document.getElementById('vertical');

function drawAntPart(myraPart) {
  context.drawImage(img_horizontal, myraPart.x, myraPart.y);
  /* context.drawImage(img_vertical, myraPart.x, myraPart.y); */
 /*  context.fillStyle = MYRA_COLOUR;
  context.strokeStyle = MYRA_BORDER_COLOUR;
  context.fillRect(MYRAPart.x, MYRAPart.y, 10, 10);
  context.strokeRect(MYRAPart.x, MYRAPart.y, 10, 10);; */
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


