var generateBtn = document.querySelector("#generate");

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");


function generatePassword() {
  


generateBtn.addEventListener("click", writePassword);


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }