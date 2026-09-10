let finalScore = document.getElementById("final-score");

function checkGameFinished() {
    let getScoreFromLS = localStorage.getItem("score");

    if (getScoreFromLS === null) {
        finalScore.textContent = 0;
    } else {
        finalScore.textContent = getScoreFromLS;
    }

    localStorage.removeItem("score");


}
// checkGameFinished();