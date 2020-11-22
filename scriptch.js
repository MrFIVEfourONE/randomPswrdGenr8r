var generateBtn = document.querySelector("#generate");

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));


var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");


function generatePassword() {
  
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  
  var retVal = "";
  for (var i = 0; i < length; i++) {
   
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

generateBtn.addEventListener("click", writePassword);


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }