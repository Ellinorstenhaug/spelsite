let memory = 'Memory'
let memoryScore = webStorage.getScore(memory);
let tetris = "Tetris";
let tetrisScore = webStorage.getScore(tetris);
let snake = "Snake"
let snakeScore = webStorage.getScore(snake);
let ssp = "Sten, Sax, Påse"
let sspScore = webStorage.getScore(ssp);

let ssp_score = document.getElementById('ssp-score');
ssp_score.innerHTML = sspScore;

let memory_score = document.getElementById('memory-score');
memory_score.innerHTML = memoryScore;

let tetris_score = document.getElementById('tetris-score');
tetris_score.innerHTML = tetrisScore;

let snake_score = document.getElementById('snake-score');
snake_score.innerHTML = snakeScore;