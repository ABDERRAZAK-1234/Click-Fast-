let historyList = document.getElementById("history-list");
let btnClearHistory = document.getElementById("btn-clear-history");
let btnHistoryHome = document.getElementById("btn-history-home");

function showHistory() {

    let history = JSON.parse(localStorage.getItem("history")) || [];

    historyList.innerHTML = "";

    if (history.length === 0) {
        historyList.innerHTML = "<p>Aucune partie enregistrée.</p>";
        return;
    }

    [...history].reverse().forEach(function (game) {

        let historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
            <div class="history-main">
                <strong class="history-score">${game.score}</strong>
                <span>points</span>
            </div>

            <div class="history-info">
                <div>
                    <span>Pseudo</span>
                    <strong>${game.pseudo}</strong>
                </div>

                <div>
                    <span>Mode</span>
                    <strong>${game.mode}</strong>
                </div>

                <div>
                    <span>Durée</span>
                    <strong>${game.duree}s</strong>
                </div>

                <div>
                    <span>Difficulté</span>
                    <strong>${game.difficulte}</strong>
                </div>
            </div>

            <small class="history-date">
                ${game.date}
            </small>
        `;

        historyList.appendChild(historyItem);
    });
}

btnClearHistory.addEventListener("click", function () {

    localStorage.removeItem("history");

    showHistory();
});

btnHistoryHome.addEventListener("click", function () {

    showView("view-home");

});

let savedView = localStorage.getItem("currentView");

if (savedView === "view-history") {
    showHistory();
}