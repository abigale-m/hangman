// Word list
var words = [
  "hangman",
  "javascript",
  "programming",
  "computer",
  "internet"
];

// Randomly choose a word from the list
var word = words[Math.floor(Math.random() * words.length)];

// Create an array to hold the guessed letters
var guessedLetters = [];

// Create an array to hold the correctly guessed letters
var correctLetters = [];

// Set the number of incorrect guesses allowed
var maxGuesses = 6;

// Function to update the display of the word with underscores for unguessed letters
function updateWordDisplay() {
  var display = "";
  for (var i = 0; i < word.length; i++) {
    if (correctLetters.indexOf(word[i]) !== -1) {
      display += word[i];
    } else {
      display += "_";
    }
    display += " ";
  }
  document.getElementById("word").innerHTML = display;
}

// Function to update the display of the guessed letters
function updateLettersDisplay() {
  document.getElementById("letters").innerHTML = "Guessed letters: " + guessedLetters.join(", ");
}

// Function to update the display of the number of remaining guesses
function updateGuessesDisplay() {
  document.getElementById("guesses").innerHTML = "Guesses remaining: " + (maxGuesses - guessedLetters.filter(function(letter) {
    return word.indexOf(letter) === -1;
  }).length);
}

// Function to check if the game is over
function checkGameOver() {
  if (guessedLetters.length >= maxGuesses || correctLetters.length === word.length) {
    var message = correctLetters.length === word.length ? "You win!" : "You lose!";
    alert(message);
    location.reload();
  }
}

// Event listener for when a key is pressed
document.addEventListener("keydown", function(event) {
  // Check that the key pressed is a letter and hasn't already been guessed
  if (event.keyCode >= 65 && event.keyCode <= 90 && guessedLetters.indexOf(event.key.toLowerCase()) === -1) {
    // Add the letter to the guessed letters array
    guessedLetters.push(event.key.toLowerCase());

    // Check if the letter is in the word and add it to the correct letters array if it is
    if (word.indexOf(event.key.toLowerCase()) !== -1) {
      correctLetters.push(event.key.toLowerCase());
    }

    // Update the displays
    updateWordDisplay();
    updateLettersDisplay();
    updateGuessesDisplay();
    checkGameOver();
  }
});
