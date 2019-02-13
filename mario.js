let marioHP = 100;
let bowserHP = 100;
opAttacks = [flameThrower, clawslash, kidnap, toybomb];
playerMove = 0;
let bgmusic = new Audio ("sounds/music/bgmusic.mp3"); 

function bgm(){
  bgmusic.play(); 
  document.getElementById("startplay").style.visibility = "hidden";  
}


/* Mario's move*/
function fireball() {
  document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
  if (playerMove == 0 && marioHP != 0) {
    let miss = Math.floor((Math.random() * 10) + 1);
    if (miss <= 5) {
      document.getElementById('message').innerHTML = " Mario's attack missed! ";
    }
    else {
      let snd = new Audio("sounds/music/fireball.mp3");
      snd.play();
      document.getElementById('message').innerHTML = " Mario used fireball ";
      document.getElementById("mario").style.WebkitAnimationPlayState = "running";
      let critical = Math.floor((Math.random() * 10) + 1);
      if (critical == 4) {
        for (let x = 0; x < 2; x++) {
          document.getElementById('message').innerHTML = " Critical! ";
          bowserHP = bowserHP - 30;
        }
      }
      else {
        bowserHP = bowserHP - 30;
      }
      if (bowserHP < 0) { bowserHP = 0 }
      document.getElementById('bowserHP').innerHTML = bowserHP;
      if (bowserHP == 0) {
        document.getElementById('message').innerHTML = " Bowser Jr fainted! "
        document.getElementById("mario").style.WebkitAnimationPlayState = "paused";
        bgmusic.pause(); 
        let snd = new Audio("sounds/music/victory.mp3");
        snd.play();
        let win = new Audio ("sounds/music/iwin.mp3");
        win.play(); 
      }
    }
    playerMove = 1;
  }
}

function spinthrow() {
  document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
  if (playerMove == 0 && marioHP != 0) {
    let miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
      document.getElementById('message').innerHTML = " Mario's attack missed! "
    }
    else {
      let snd = new Audio("sounds/music/spinthrow.mp3");
      snd.play();
      document.getElementById('message').innerHTML = " Mario used spin throw ";
      document.getElementById("mario").style.WebkitAnimationPlayState = "running";
      let critical = Math.floor((Math.random() * 10) + 1);
      if (critical == 4) {
        document.getElementById('message').innerHTML = " Critical! ";
        for (let x = 0; x < 2; x++) {
          bowserHP = bowserHP - 20;
        }
      }
      else {
        bowserHP = bowserHP - 20;
      }
      if (bowserHP < 0) { bowserHP = 0 }
      document.getElementById('bowserHP').innerHTML = bowserHP;
      if (bowserHP == 0) {
        bgmusic.pause(); 
        document.getElementById('message').innerHTML = " Bowser Jr fainted! "
        document.getElementById("mario").style.WebkitAnimationPlayState = "paused";
        let snd = new Audio("sounds/music/victory.mp3");
        snd.play();
        let win = new Audio ("sounds/music/iwin.mp3");
        win.play(); 
      }
    }
    playerMove = 1;
  }
}

function plummerpunch() {
  document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
  if (playerMove == 0 && marioHP != 0) {
    let miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
      document.getElementById('message').innerHTML = " Mario's attack missed! "
    }
    else {
      let snd = new Audio("sounds/music/plummerpunch.mp3");
      snd.play();
      document.getElementById('message').innerHTML = " Mario used plummer punch ";
      document.getElementById("mario").style.WebkitAnimationPlayState = "running";
      let critical = Math.floor((Math.random() * 10) + 1);
      if (critical <= 3) {
        document.getElementById('message').innerHTML = " Critical! ";
        for (let x = 0; x < 2; x++) {
          bowserHP = bowserHP - 10;
        }
      }
      else {
        bowserHP = bowserHP - 10;
      }
      if (bowserHP < 0) { bowserHP = 0 }
      document.getElementById('bowserHP').innerHTML = bowserHP;
      if (bowserHP == 0) {
        document.getElementById('message').innerHTML = " Bowser Jr fainted! "
        document.getElementById("mario").style.WebkitAnimationPlayState = "paused";
        bgmusic.pause(); 
        let snd = new Audio("sounds/music/victory.mp3");
        snd.play();
        let win = new Audio ("sounds/music/iwin.mp3");
        win.play(); 
      }
    }
    playerMove = 1;
  }
}
function jumpon() {
  document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
  if (playerMove == 0 && marioHP != 0) {
    let miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
      document.getElementById('message').innerHTML = " Mario's attack missed! "
    }
    else {
      let snd = new Audio("sounds/music/jump.mp3");
      snd.play();
      document.getElementById('message').innerHTML = " Mario used jump on ";
      document.getElementById("mario").style.WebkitAnimationPlayState = "running";
      let critical = Math.floor((Math.random() * 10) + 1);
      if (critical == 4) {
        document.getElementById('message').innerHTML = " Critical! ";
        for (let x = 0; x < 2; x++) {
          bowserHP = bowserHP - 5;
        }
      }
      else {
        bowserHP = bowserHP - 5;
      }
      if (bowserHP < 0) { bowserHP = 0 }
      document.getElementById('bowserHP').innerHTML = bowserHP;
      if (bowserHP == 0) {
        document.getElementById('message').innerHTML = " Bowser Jr fainted! "
        document.getElementById("mario").style.WebkitAnimationPlayState = "paused";
        bgmusic.pause(); 
        let snd = new Audio("sounds/music/victory.mp3");
        snd.play();
        let win = new Audio ("sounds/music/iwin.mp3");
        win.play(); 
      }
    }
    playerMove = 1;
  }
}



/* Bowser's moves */

function flameThrower() {
  bmove()
  let miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Bowser Jr's attack missed! "
  }
  else {
    let snd = new Audio("sounds/music/flamethrower.mp3");
    snd.play();
    document.getElementById('message').innerHTML = " Bowser Jr used flame thrower "
    document.getElementById("bjr").style.WebkitAnimationPlayState = "running";
    let critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      document.getElementById('message').innerHTML = " Critical! ";
      for (let x = 0; x < 2; x++) {
        marioHP = marioHP - 30;
      }
    }
    else {
      marioHP = marioHP - 30;
    }
    if (marioHP < 0) { marioHP = 0 }
    document.getElementById('marioHP').innerHTML = marioHP;
    if (marioHP == 0) {
      document.getElementById('message').innerHTML = " Mario fainted! "
      document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
      bgmusic.pause(); 
      let snd = new Audio("sounds/music/gameover.mp3");
      snd.play();
      let lose = new Audio("sounds/music/uhoh.mp3"); 
      lose.play(); 
    }
  }
}

function clawslash() {
  let miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Bowser Jr's attack missed! "
  }
  else {
    let snd = new Audio("sounds/music/clawslash.mp3");
    snd.play();
    document.getElementById('message').innerHTML = " Bowser Jr used claw slash "
    document.getElementById("bjr").style.WebkitAnimationPlayState = "running";
    let critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      document.getElementById('message').innerHTML = " Critical! ";
      for (let x = 0; x < 2; x++) {
        marioHP = marioHP - 20;
      }
    }
    else {
      marioHP = marioHP - 20;
    }
    if (marioHP < 0) { marioHP = 0 }
    document.getElementById('marioHP').innerHTML = marioHP;
    if (marioHP == 0) {
      document.getElementById('message').innerHTML = " Mario fainted! "
      document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
      bgmusic.pause(); 
      let snd = new Audio("sounds/music/gameover.mp3");
      snd.play();
      let lose = new Audio("sounds/music/ilose.mp3"); 
      lose.play();
    }
  }
}

function kidnap() {
  let snd = new Audio("sounds/music/kidnap.mp3");
  snd.play();
  document.getElementById('message').innerHTML = " Bowser Jr tried to kidnap! "
}

function toybomb() {
  let miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Bowser Jr's attack missed! "
  }
  else {
    let snd = new Audio("sounds/music/toybomb.mp3");
    snd.play();
    document.getElementById('message').innerHTML = " Bowser Jr used toy bomb "
    document.getElementById("bjr").style.WebkitAnimationPlayState = "running";
    let critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      document.getElementById('message').innerHTML = " Critical! ";
      for (let x = 0; x < 2; x++) {
        marioHP = marioHP - 10
      }
    }
    else {
      marioHP = marioHP - 10;
    }
    if (marioHP < 0) { marioHP = 0 }
    document.getElementById('marioHP').innerHTML = marioHP;
    if (marioHP == 0) {
      document.getElementById('message').innerHTML = " Mario fainted! "
      document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
      bgmusic.pause(); 
      let snd = new Audio("sounds/music/gameover.mp3");
      snd.play();
      let lose = new Audio("sounds/music/uhoh.mp3"); 
      lose.play();
    }
  }
}

function nextturn() {
  document.getElementById("mario").style.WebkitAnimationPlayState = "paused";
  document.getElementById("bjr").style.WebkitAnimationPlayState = "paused";
  if (playerMove == 1 && bowserHP != 0) {
    let move = Math.floor((Math.random() * 4) + 1);
    opAttacks[move]();
    playerMove = 0;
  }
}