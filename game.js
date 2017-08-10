var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//computer chooses a random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//user gets 9 guesses
var updateGuessesLeft = function() {
  //need to display guesses left in html
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = []; {
  }

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}
  updateLetterToGuess();
  updateGuessesLeft();

//add in key release
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins') .innerHTML = "Wins: " + wins;
                alert("Your psychic powers are quite strong!");
                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Focus and try again!");
            reset();
        }
};

