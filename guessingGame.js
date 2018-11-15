// create secretNumber
var secretNumber = 4;

// ask users for guess
var guess = Number(prompt("Guess a number"))
 


alert(guess);
// check if guess is right
if (guess === secretNumber){
    alert("You got it right!");
}

// otherwise, check for higher
else  if (guess > secretNumber){
    alert("Too high, Guess again");
}
// check if lower
else{
    alert("Too low, Guess again");
}





 