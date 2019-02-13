let webStorage = function () {
    //för att SPARA NER poäng
    let saveScore = function (score, actualGame) {
        //Sparar bara för det aktuella spelet via localStorage (https://www.w3schools.com/html/html5_webstorage.asp). 
        localStorage.setItem(actualGame, score);
    }

    //För att HÄMTA poäng
    let getScore = function (actualGame) {
        //Om man ej hunnit spela spelet än (om item inte finns i localStorage) är score = 0.
        if (localStorage.getItem(actualGame) === null) {
            this.saveScore(0, actualGame)
        }
        //Annars returnerar den bara actualgame & score
        return localStorage.getItem(actualGame);
    }

    return {
        saveScore: saveScore,
        getScore: getScore
    }
}(); //funktionen körs direkt on load