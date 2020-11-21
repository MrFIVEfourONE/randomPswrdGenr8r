// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthNum = Number(prompt("How many characters do you want your password to be? Choose between 8 and 128"))

var charType = prompt("Type in a character type and click okay; special, numeric, uppercase, lowercase.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
