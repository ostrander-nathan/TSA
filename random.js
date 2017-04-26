var arrow = document.getElementById("arrowDiv");
var bodyArea = document.getElementById("bigBody");
bigBody.addEventListener('click', randomizer);

function randomizer() {
    var randomNum = Math.floor(Math.random() * 10 + 1);
    if (randomNum <= 5) {
        arrow.classList.add('right-arrow');
        arrow.classList.remove('left-arrow');
    } else if (randomNum >= 6) {
        arrow.classList.add('left-arrow');
        arrow.classList.remove('right-arrow');
    }
}
