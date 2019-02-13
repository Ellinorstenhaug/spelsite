
let webStorage = function () {
    let saveScore = function (score,actualGame) {
        localStorage.setItem(actualGame, score);
    }

    let getScore = function (actualGame) {
        if(localStorage.getItem(actualGame) === null){
            this.saveScore(0,actualGame)
        }
        
       return  localStorage.getItem(actualGame);
    }
    return {
        saveScore:saveScore,
        getScore:getScore
    }
}();



