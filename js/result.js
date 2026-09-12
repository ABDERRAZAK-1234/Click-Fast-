let btnReturnToHome = document.getElementById("btn-home");
let finalScore = document.getElementById("final-score");
let btnReplay = document.getElementById("btn-replay");
let showRecord = document.getElementById("result-record");
let btnResultHistory = document.getElementById("btn-results-history");

function checkGameFinished() {
    let getScoreFromLS = localStorage.getItem("score");

    if (getScoreFromLS === null) {
        finalScore.textContent = 0;
    } else {
        finalScore.textContent = getScoreFromLS;
    }

    // localStorage.removeItem("score");
    saveGameToHistory();

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

function saveGameToHistory() {

    if (localStorage.getItem("gameSaved") === "true") {
        return;
    }

    let history = JSON.parse(localStorage.getItem("history")) || [];

    let pseudo = localStorage.getItem("pseudo");
    let score = Number(localStorage.getItem("score")) || 0;
    let choix = JSON.parse(localStorage.getItem("choix"));

    let game = {
        pseudo: pseudo,
        score: score,
        mode: choix.mode,
        duree: choix.duree,
        difficulte: choix.difficulte,
        date: new Date().toLocaleString("fr-FR")
    };

    history.push(game);

    localStorage.setItem("history", JSON.stringify(history));

    localStorage.setItem("gameSaved", "true");
}

btnResultHistory.addEventListener("click", function () {
    showView("view-history");
    showHistory();
    sectionResult.hidden = true;
});
