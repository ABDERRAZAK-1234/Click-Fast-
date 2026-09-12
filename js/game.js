let gameArea = document.getElementById("game-arena");
let target = document.getElementById("target");
let gameScore = document.getElementById("score");

let score = 0;

let bestScore = Number(localStorage.getItem("bestScore")) || 0;

let defiTimer;

function moveTarget() {
    let maxX = gameArea.clientWidth - target.offsetWidth;
    let maxY = gameArea.clientHeight - target.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";

    let choix2 = JSON.parse(localStorage.getItem("choix"));
    if (choix2.mode === "Defi") {
        modeDefi();
    }
}

target.addEventListener("click", function () {

    score++;

    gameScore.textContent = score;

    localStorage.setItem("score", score);

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("bestScore", bestScore);
    }

    moveTarget();

});
// Mode Défi
function modeDefi() {

    clearTimeout(defiTimer);

    defiTimer = setTimeout(function () {
        moveTarget();
    }, 1000);

}

// mode precision
gameArea.addEventListener("click", function (event) {

    let choix2 = JSON.parse(localStorage.getItem("choix"));

    if (choix2.mode === "Precision" && event.target !== target) {
        score--;

        gameScore.textContent = score;

        localStorage.setItem("score", score);
    }
});