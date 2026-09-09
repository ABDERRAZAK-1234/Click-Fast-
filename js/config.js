let formConfig = document.getElementById("config-form");
let optionGroups = document.querySelectorAll(".options");

let btnStartPartie = document.getElementById("goo");

let choix = {
    mode : null,
    duree : null,
    difficulte : null
};

formConfig.addEventListener('submit', function(event){
    event.preventDefault();
    let pseudoValue = document.getElementById("pseudo").value;
    

    // console.log(pseudoValue);
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

            
            
        });
        
    });
    
});
setTimeout(() => {
    console.log(choix);
    
}, 3000);

btnStartPartie.addEventListener('')



// console.log(opt);



