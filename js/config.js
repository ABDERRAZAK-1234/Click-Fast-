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

formConfig.addEventListener('submit', function(event){
    event.preventDefault();
    let pseudoValue = document.getElementById("pseudo").value;
    

    console.log(pseudoValue);
    sectionGame.hidden = false;
    sectionConfig.hidden = true;
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
            console.log(choix);
            
            
        });
        
    });
    
});
// setTimeout(() => {
//     console.log(choix);
    
// }, 3000);
// let isClicked = false;
// btnStartPartie.addEventListener('click', function(){    
//     isClicked = true;
//     if (isClicked === true) {
//         sectionGame.hidden = false;
//         sectionConfig.hidden = true;
//     }
// })



// console.log(opt);



