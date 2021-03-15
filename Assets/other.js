// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  //prompts for password criteria
    var passwordLength = prompt("How many characters do you want your password to be?");
    var lowerCase = confirm("Do you want lowercase characters in your password?");
    var upperCase = confirm("Do you want uppercase characters in your password?");
    var numbers = confirm("Do you want numbers in your password?");
    var special = confirm("Do you want special characters in your password?");

  //minimum password length
    var minCount = 0;

  //minimum numbers/characters
    var minLowerCase = "";
    var minUpperCase = "";
    var minNumbers = "";
    var minSpecial = "";

  var functionArray = {
    getLowerCase: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 48));
    },
    getUpperCase: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getNumbers: function(){
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getSpecial: function(){
      return special[Math.floor(Math.random() * special.length)]
    }
  }
//if user selects yes to criteria - get function for those criteria
  if (lowerCase === true){
    minLowerCase = functionArray.getLowerCase();
    minCount++;
  }

  if (upperCase === true){
    minUpperCase = functionArray.getUpperCase();
    minCount++;
  }

  if (numbers === true){
    minNumbers = functionArray.getNumbers();
    minCount++;
  }

  if (special === true){
    minSpecial = functionArray.getSpecial();
    minCount++;
  }

  //empty string for loop
  var randomPasswordGenerated = "";

  //loop for getting random numbers
  for (let i = 0, i < (parseInt(passwordLength) - minCount); i++){
    var randomNumbersPicked = Math.floor(Math.random()*4);

    randomPasswordGenerated += randomNumbersPicked;
  }


  // to make sure characters are added to the password
  randomPasswordGenerated += minNumbers;
  randomPasswordGenerated += minLowerCases;
  randomPasswordGenerated += minUpperCases;
  randomPasswordGenerated += minSpecial;

  return randomPasswordGenerated;

}

