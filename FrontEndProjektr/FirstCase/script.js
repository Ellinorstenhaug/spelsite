var lastresult = 0;
function random(x){
    let BotChoose = document.getElementById("BotChoose");
    let Result = document.getElementById("Result");
    let wHappend = document.getElementById("wHappend");
    let yourChoice = document.getElementById("yourChoice");
    let sten = '<img src="images/player_ssp-26.svg">';
    let sax = '<img src="images/player_ssp-24.svg">';
    let pose = '<img src="images/player_ssp-22.svg">';
    var max = 4;
    var min = 1;
    var botanswer= Math.floor(Math.random() * (max - min)) + min;
    var resultat;
    var botresult;
    if(botanswer == 1){
        botresult = '<img src="images/bot_ssp-25.svg">';
    }
    else if(botanswer == 2){
        botresult= '<img src="images/bot_ssp-23.svg">';
    }
    else {
        botresult = '<img src="images/bot_ssp-21.svg">';
    }
    switch (x) {
     case "Sten":
     console.log("Sten");
     switch(botanswer){
         case 1:
         console.log("Bot choose rock, result is even");
         yourChoice.innerHTML="Du valde" + sten;
         resultat = "Even";
         break;
         case 2:
         console.log("Bot choose Sax, you won");
         yourChoice.innerHTML="Du valde" + sten;
         resultat = "Victory"
         lastresult++;
         break;
         case 3:
         console.log("Bot choose Påse, you lost");
         yourChoice.innerHTML="Du valde" + sten;
         resultat = "Lost";
         break;
     }
     break;
     case "Sax":
     switch(botanswer){
        case 1:
        console.log("Bot choose rock, you lost");
        yourChoice.innerHTML="Du valde" + sax;
        resultat = "Lost";
        break;
        case 2:
        console.log("Bot choose Sax,  result is even");
        yourChoice.innerHTML="Du valde" + sax;
        resultat = "Even";
        break;
        case 3:
        console.log("Bot choose Påse, you won");
        yourChoice.innerHTML="Du valde" + sax;
        lastresult++;
        resultat = "Victory"
        break;
    }
     console.log("Sax");
     break;
     case "Pose":
     console.log("Påse");
     switch(botanswer){
        case 1:
        console.log("Bot choose rock, you won");
        yourChoice.innerHTML="Du valde" + pose;
        lastresult++;
        resultat = "Victory"
        break;
        case 2:
        console.log("Bot choose Sax,  you lost");
        yourChoice.innerHTML="Du valde" + pose;
        resultat = "Lost";
        break;
        case 3:
        console.log("Bot choose Påse, result is even");
        yourChoice.innerHTML="Du valde" + pose;
        resultat = "Even";
        break;
    }
     break;
      }
   BotChoose.innerHTML="Bot valde " + botresult;
   Result.innerHTML= lastresult;
   
   wHappend.innerHTML=resultat;

}


