var lastresult = 0;
function random(x){
    let BotChoose = document.getElementById("BotChoose");
    let Result = document.getElementById("Result");
    let wHappend = document.getElementById("wHappend");
    var max = 4;
    var min = 1;
    var botanswer= Math.floor(Math.random() * (max - min)) + min;
    var resultat;
    var botresult;
    if(botanswer == 1){
        botresult = "Sten";
    }
    else if(botanswer == 2){
        botresult= "Sax";
    }
    else {
        botresult = "Påse"
    }
    switch (x) {
     case "Sten":
     console.log("Sten");
     switch(botanswer){
         case 1:
         console.log("Bot choose rock, result is even");
         resultat = "Even";
         break;
         case 2:
         console.log("Bot choose Sax, you won");
         lastresult++;
         resultat = "Victory"
         break;
         case 3:
         console.log("Bot choose Påse, you lost");
         resultat = "Lost";
         break;
     }
     break;
     case "Sax":
     switch(botanswer){
        case 1:
        console.log("Bot choose rock, you lost");
        resultat = "Lost";
        break;
        case 2:
        console.log("Bot choose Sax,  result is even");
        resultat = "Even";
        break;
        case 3:
        console.log("Bot choose Påse, you won");
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
        lastresult++;
        resultat = "Victory"
        break;
        case 2:
        console.log("Bot choose Sax,  you lost");
        resultat = "Lost";
        break;
        case 3:
        console.log("Bot choose Påse, result is even");
        resultat = "Even";
        break;
    }
     break;
      }
   BotChoose.innerHTML="Bot valde " + botresult;
   Result.innerHTML="S/S/P Poäng "+ lastresult;
   wHappend.innerHTML=resultat;

}


