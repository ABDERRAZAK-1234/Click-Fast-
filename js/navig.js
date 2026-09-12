function showView(viewId) {
    document.querySelectorAll("main > section").forEach(function(section) {
        section.hidden = true;
    });

    let view = document.getElementById(viewId);

    if (view) {
        view.hidden = false;
        localStorage.setItem("currentView", viewId);
    }
}

let currentView = localStorage.getItem("currentView");

if (currentView) {
    showView(currentView);
}