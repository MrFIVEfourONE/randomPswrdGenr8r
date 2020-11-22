var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
    var passwordLength = parseInt(prompt('How long would you like the password to be(8 < x < 128)?'));
    var password = "";
    var charPool = [];

    var includeSpecialChars = confirm("do you want password to include special chars?")
    if (includeSpecialChars) {
        charPool = charPool.concat(specialChar);
    }

    var alphaUpper = confirm("do you want password to include Upper case?")
    if (alphaUpper) {
        charPool = charPool.concat(alphaUpper);
    }

    var alphaLower = confirm("do you want password to include Lower Case?")
    if (alphaLower) {
        charPool = charPool.concat(alphaLower);
    }

    var number = confirm("do you want password to include any Numbers?")
    if (number) {
        charPool = charPool.concat(number);
    }

    for (let i = 0; i < password.length; i++) {
        var randomNum = Math.floor(Math.random() * charPool.length);
        password = password + charPool(randomNum);
    }
    return password;
}