var generateBtn = document.querySelector("#generate");
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var passwordLength = parseInt(prompt('How long would you like the password to be?'));
    var password = "";
    var charPool = [];

    var includeSpecialChar = confirm("do you want password to include special chars?")
    if (includeSpecialChar) {
        charPool = charPool.concat(specialChar);
    }

    var includeAlphaUpper = confirm("do you want password to include Upper case?")
    if (includeAlphaUpper) {
        charPool = charPool.concat(alphaUpper);
    }

    var includeAlphaLower = confirm("do you want password to include Lower Case?")
    if (includeAlphaLower) {
        charPool = charPool.concat(alphaLower);
    }

    var includeNumber = confirm("do you want password to include any Numbers?")
    if (includeNumber) {
        charPool = charPool.concat(number);
    }

    for (let i = 0; i < passwordLength; i++) {
        var randomNum = Math.floor(Math.random() * charPool.length);
        password = password + charPool[randomNum];
    }
    return password;
}

generateBtn.addEventListener("click", writePassword);