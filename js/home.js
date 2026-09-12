let btnStart = document.getElementById('btn-start');
let homeHistory = document.getElementById("btn-history");
let sectionHome = document.getElementById('view-home');
let sectionConfig = document.getElementById('view-config');
let homeRecord = document.getElementById("home-record");
let btnStartIsClicked = false;
btnStart.addEventListener('click', function () {
    btnStartIsClicked = true;
    // console.log(btnStartIsClicked)
    // console.log('C clicked');
    if (btnStartIsClicked == true) {
        showView("view-config");
        sectionHome.hidden = true;
        localStorage.removeItem("score");

        localStorage.removeItem("gameSaved");
        

    }
});
// console.log(btnStartIsClicked);


homeRecord.textContent = bestScore;



function setupHistoryNavigation(){

    homeHistory.addEventListener('click', function(){
        showView("view-history");
        showHistory();
    });
}
setupHistoryNavigation();