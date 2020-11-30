var generateBtn = document.querySelector("#generate");

var copyBtn = document.querySelector("#copyBtn")

// arrays...................
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// arrays...................

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function copyPassword() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
  }
  
function generatePassword() {
    var passwordLength = parseInt(prompt('How many characters would you like your PASSWORD to be? \n It must be atleast 8 but no more then 128.'));
    // added this conditional gate to validate the input
    if (passwordLength < 8 || passwordLength > 128) {
        return alert("oops! pick a number between 8-128")
    }

    var includeSpecialChar = confirm("Do you want your AWSOME password to include \n Special Characters?")
    var includeAlphaUpper = confirm("How about \n Upper Case Characters?")
    var includeAlphaLower = confirm("Or even some \n Lower Case Characters?")
    var includeNumber = confirm("And lastly how about some \n Numbers?")
    // added another conditional gate to validate this input as well, just incase the user selected 'cancel' on all 4 prompts
    if (
        !includeAlphaLower &&
        !includeAlphaUpper &&
        !includeNumber &&
        !includeSpecialChar
    ) {
        return alert("!!MUST SELECT ATLEAST \n 1oneONE!\n TYPE OF CHARACTER!!")
    }
    var password = "";
    var charPool = [];

    if (includeSpecialChar) {
        charPool = charPool.concat(specialChar);
    }
    if (includeAlphaUpper) {
        charPool = charPool.concat(alphaUpper);
    }
    if (includeAlphaLower) {
        charPool = charPool.concat(alphaLower);
    }
    if (includeNumber) {
        charPool = charPool.concat(number);
    }


    for (let i = 0; i <= passwordLength; i++) {
        // If in the event that the math.random pulled a 1, like in this example where the user choose lowerChars&&numbers: i=[35], but the charPool.lenght in that example is = 36, and if the loop just so happened to try and grab the non excistant 36th index there would be an error. SO I added the -1 and the end of line 55.
        var randomNum = Math.floor(Math.random() * charPool.length -1);
        password += charPool[randomNum];
    }
    return password;
}

generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);