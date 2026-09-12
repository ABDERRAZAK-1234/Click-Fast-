let btnReturnToHome = document.getElementById("btn-home");
let finalScore = document.getElementById("final-score");
let btnReplay = document.getElementById("btn-replay");
let showRecord = document.getElementById("result-record");

function checkGameFinished() {
    let getScoreFromLS = localStorage.getItem("score");

    if (getScoreFromLS === null) {
        finalScore.textContent = 0;
    } else {
        finalScore.textContent = getScoreFromLS;
    }

    // localStorage.removeItem("score");

}

btnReturnToHome.addEventListener("click", function () {
    showView("view-home");
});
checkGameFinished();

function replayGame() {

    btnReplay.addEventListener("click",function(){
        countDown();
        
        sectionResult.hidden = true;
    });
}
replayGame();

showRecord.textContent = bestScore; 
