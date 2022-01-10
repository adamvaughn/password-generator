// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character Arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

// Confirmations
var confirmLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecChar;

// Password guidlines

// Choose number of characters
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like? Please enter 8-128:"));
  while(confirmLength < 8 || confirmLength > 128) {
      alert("Password length must be between 8-128 characters try again");
      var confirmLength = (prompt("How many characters would you like? Please enter 8-128:"));
      } 

    // Choose character types
    var confirmLower = confirm("Include lowercase?");
    var confirmUpper = confirm("Include uppercase?");
    var confirmNumber = confirm("Include numbers?");
    var confirmSpecChar = confirm("Include special characters?")
      while(confirmUpper === false && confirmLower === false && confirmSpecChar === false && confirmNumber === false) {
        alert("You must choose at least one character type.");
        var confirmLower = confirm("Include lowercase?");
        var confirmUpper = confirm("Include uppercase?");
        var confirmNumber = confirm("Include numbers?");
        var confirmSpecChar = confirm("Include special characters?")    
    } 
  
    var passwordCharacters = []
    
    //Confirmations connected to arrays

    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(uppercase)
    }

    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmSpecChar) {
      passwordCharacters = passwordCharacters.concat(specChar)
    }

      console.log(passwordCharacters)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);