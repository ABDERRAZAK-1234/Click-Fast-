let btnStart = document.getElementById('btn-start');
let btnHisorique = document.getElementById('btn-history');
let sectionHome = document.getElementById('view-home');
let sectionConfig = document.getElementById('view-config')
let btnStartIsClicked = false;
btnStart.addEventListener('click', function () {
    btnStartIsClicked = true;
    // console.log(btnStartIsClicked)
    console.log('C clicked');
    if (btnStartIsClicked == true) {
    sectionConfig.hidden = false;
    sectionHome.hidden = true;
}
});
// console.log(btnStartIsClicked);




btnHisorique.addEventListener('click', function () {
    console.log('H clicked');

})
