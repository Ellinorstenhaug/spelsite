/*
För att bygga detta spel har jag följt (till viss del) denna tutorial https://www.youtube.com/watch?v=ZniVgo8U7ek. 

Har lagt till winfunktionen, samt manipulerat funktioner för att lägga till andra effekter (som poängsystem etc). Styling osv är också ändrat.

Har även byggt webstorage.js för att spara in slutpoängen i webbläsarens minne (som går via scoreboard.js).  
*/
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = true;
let firstCard, secondCard;
let count = 0;
let clickCount = 0;


(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function startMemory() {
    lockBoard = false;
    timer();
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    //klick 2
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
    isMatch ? (disableCards(), counter(), countClicks()) : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        countClicks();
        resetBoard();
    }, 1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

function counter() {
    count++;
    if (count === 6) {
        setTimeout(() => {
            win();

        }, 500)
    }
}

function countClicks() {
    clickCount++;
    document.getElementById('numberOfTries').innerHTML = clickCount;
}


let interval;
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let totalSeconds = 0;

function timer() {
    interval = setInterval(setTime, 1000);
}

function timeOutput(time) {
    let timeString = time + "";
    if (timeString.length < 2) {
        return "0" + timeString;
    } else {
        return timeString;
    }
}

function setTime() {
    ++totalSeconds;
    seconds.innerHTML = timeOutput(totalSeconds % 60);
    minutes.innerHTML = timeOutput(parseInt(totalSeconds / 60));
}

function stopTimer() {
    clearInterval(interval);
    interval == totalSeconds;
}



let div = document.getElementById("winner");
div.style.display = "none";

function win() {
    div.style.display = "block";
    stopTimer();

    //TODO
    point = totalSeconds * clickCount;
    webStorage.saveScore(point, memory);
    document.getElementById('points').innerHTML = point;
    memoryScore.innerHTML = point;
}

cards.forEach(card => card.addEventListener('click', flipCard));