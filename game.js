//Remember these? We get references to the elements.
let game = document.querySelector("#game");
let score = document.querySelector("#score");

let points = 0;

//This function returns a random integer [0...max)
function random(max) {
    return Math.floor(Math.random() * max);
}

//Call this function to set up one animal.
//  animal: The button element for the animal
//  moveTime: How many milliseconds to wait between each move
//  runPercent: The % likelyhood the animal moves when you mouse over
//  numPoints: the number of points you get for clicking it
function setup(animal, moveTime, runPercent, numPoints) {

    //In javascript you can define a function inside a function...
    //It can only be used in this function (scope!)
    function randomize() {
        animal.style.top = random(game.offsetHeight - animal.offsetHeight) + "px";
        animal.style.left = random(game.offsetWidth - animal.offsetWidth) + "px";
    }

    //Every moveTime milliseconds, randomize the position
    window.setInterval(randomize, moveTime);

    //On mouseOver, randomize the position, runPercent% of the time.
    animal.addEventListener('mouseover', function () {
        if (random(100) < runPercent) {
            randomize();
        }
    });

    //Randomize the position on startup
    randomize();

    //Assign points on every click
    animal.addEventListener('click', function () {
        points += numPoints;
        score.innerText = points;
    });
}

setup(document.querySelector("#pig"), 800, 90, 3);
setup(document.querySelector("#chicken"), 1000, 80, 2);
setup(document.querySelector("#cow"), 1200, 70, 1);

let chickx = 0;
let chicky = 0;
let chickDx = 2;
let chickDy = 2;
let chick = document.querySelector("#chick");
window.setInterval(function () {
    chick.style.left = (chickx += chickDx) + "px";
    chick.style.top = (chicky += chickDy) + "px";
    if (chickx <= 0)
        chickDx = 2;
    if (chickx >= game.offsetWidth - chick.offsetWidth)
        chickDx = -2;
    if (chicky <= 0)
        chickDy = 2;
    if (chicky >= game.offsetHeight - chick.offsetHeight)
        chickDy = -2;
    if (random(200) == 2)
        chickDy = chickDy * -1;
    if (random(200) == 1)
        chickDx = chickDx * -1;
}, 10);