let gameArea = document.getElementById("game-arena")
let target = document.getElementById("target");
let gameScore = document.getElementById("score");

let score = 0;


target.addEventListener("click", function () {

    let maxX = gameArea.clientWidth - target.offsetWidth;
    let maxY = gameArea.clientHeight - target.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";

    score++;
    gameScore.textContent = score;
    localStorage.setItem("score",score);
    
});


function checkSubmetted() {

    if (submitted) {
        // console.log(sec);
        
        if(sec == 0){
            sectionResult.hidden = false;
            sectionGame.hidden = true;
            checkGameFinished();
        }
    }
}
// checkSubmetted();


