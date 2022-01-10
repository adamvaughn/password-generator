// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character Arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

// Confirmations
var confirmLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecChar;

// Password guidlines

// Determine number of characters
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like? Please enter 8-128:"));
  while(confirmLength < 8 || confirmLength > 128) {
      alert("Password length must be between 8-128 characters try again");
      var confirmLength = (prompt("How many characters would you like? Please enter 8-128:"));
      } 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);