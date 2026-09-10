let sectionResult = document.getElementById("view-results");
// let sectionConfig = document.getElementById('view-config');
let sectionGame = document.getElementById('view-game');
let formConfig = document.getElementById("config-form");
let optionGroups = document.querySelectorAll(".options");

// let btnStartPartie = document.getElementById("goo");

let choix = {
    mode : null,
    duree : null,
    difficulte : null
};
let sec = 0 ;
let submitted = false;
let duree = 0;

let timer = document.getElementById("timer");

formConfig.addEventListener('submit', function(event){
    event.preventDefault();
    
    
    let pseudoValue = document.getElementById("pseudo").value;
    
    if(choix.mode === null || choix.duree === null || choix.difficulte === null){
        alert("Veuillez choisir toutes les options");
        return;
    }
    submitted = true;
    // console.log(pseudoValue);
    localStorage.setItem('pseudo',pseudoValue);
    localStorage.setItem('choix',JSON.stringify(choix));
    
    sectionConfig.hidden = true;
    
    let countdownSection = document.getElementById("view-countdown");
    let countdown = document.getElementById("countdown");
    
    countdownSection.hidden = false;
    
    let seconds = 3;
    countdown.textContent = seconds;
    
    let timerCountdown = setInterval(function() {
        seconds--;
        
        countdown.textContent = seconds;
        
    if (seconds === 0) {
        clearInterval(timerCountdown);
        
        countdownSection.hidden = true;
        sectionGame.hidden = false;
        
        sec = dureeSec;
        // console.log(typeof(sec));
        // console.log(sec);
        
        
        let timeOfGame = setInterval(function(){
            sec--;
            
            timer.textContent = sec
            
            checkSubmetted();
            if(sec === 0){
                clearInterval(timeOfGame);

        // sectionGame.hidden = true;
        // sectionResult.hidden = false;
    }

},1000);
    }
}, 1000);


let choix2 = JSON.parse(localStorage.getItem("choix"));
dureeSec = Number(choix2.duree);
// console.log(dureeSec);

timer.textContent = dureeSec;



});
optionGroups.forEach(function(group) {

    let options = group.querySelectorAll(".option");

    options.forEach(function(option) {

        option.addEventListener("click", function() {

            options.forEach(function(opt) {
                opt.classList.remove("active");
            });

            option.classList.add("active");

            let groupName = group.dataset.group;
            choix[groupName] = option.value
            // console.log(choix);
            
            
        });

        
    });
    
});