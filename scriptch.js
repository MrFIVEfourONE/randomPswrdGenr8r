// the html id=generate is now a js var named generateBtn
var generateBtn = document.querySelector("#generate");
// first promt normaly was a string, that is why 'Number' is infront, so output could be reconized as as a number
var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));
// there should be a if here; if (length <= 8|| length => 128 ) { prompt ("cant be lower then 8,. or higher then")}
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