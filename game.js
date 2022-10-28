//Remember these? We get references to the elements.
let game = document.querySelector("#game");
let chicken = document.querySelector("#chicken");
let pig = document. querySelector("#pig"); 
let cow = document. querySelector("#cow"); 

//This function returns a random integer [0...max)
function random(max){
    return Math.floor(Math.random() * max);
}

//This function sets the position of the chicken to a random
//place inside the game div
function randomizechicken(){
    chicken.style.top = random(game.offsetHeight - chicken.offsetHeight) + "px";
    chicken.style.left = random(game.offsetWidth - chicken.offsetWidth) + "px";
}
function randomizepig(){
    pig.style.top = random(game.offsetHeight - pig.offsetHeight) + "px";
    pig.style.left = random(game.offsetWidth - pig.offsetWidth) + "px";
    }

    function randomizecow(){
        cow.style.top = random(game.offsetHeight - cow.offsetHeight) + "px";
        cow.style.left = random(game.offsetWidth - cow.offsetWidth) + "px";
        }

//Call this function when the player clicks the chicken
function youWin(){
    alert("Winner!");
}

//We've seen this before. Call the "youWin" function
//whenever the user clicks the chicken
chicken.addEventListener('click', youWin);
pig.addEventListener('click', youWin);
cow.addEventListener('click', youWin);


//A new event lisener! "mouseover" happens when the MOUSE goes
//OVER the element.
//
//Also: Peep the anonymous function we are passing in.
chicken.addEventListener('mouseover', function(){
    //When you get the mouse over the chicken there
    //is an 80% chance the chicken moves before you
    //can click it
    if ( random(100) < 80 ){
        randomizechicken();
    }
});
pig.addEventListener('mouseover', function(){
    //When you get the mouse over the pig there
    //is an 80% chance the pig moves before you
    //can click it
    if ( random(100) < 90 ){
    randomizepig();
    }
    });

    cow.addEventListener('mouseover', function(){
        //When you get the mouse over the cow there
        //is an 80% chance the cow moves before you
        //can click it
        if ( random(100) < 80 ){
            randomizecow();
        }
    });

//Another function the browser gives us!
//Every 1000 miliseconds (1 second) move that bird
window.setInterval(randomizechicken, 1000);
window.setInterval(randomizepig, 800);
window.setInterval(randomizecow, 1200);