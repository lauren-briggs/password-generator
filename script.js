const lowerCaseCodes = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCodes = lowerCaseCodes.toUpperCase()
const numCodes = "0123456789"
const specialCodes = "~!@#$%^&*()"

console.log(lowerCaseCodes);
console.log(upperCaseCodes);
console.log(numCodes);
console.log(specialCodes);

//defining variables for promts on global scale
var inputLength
var includeLower
var includeUpper
var includeNum
var includeSpecial

//creating a variable to hold the password
var password = "";

//creating a function for prompts
function includePrompts() {
  var lengthValue;
  for (; ;) {
    //prompt asking length
    inputLength = prompt(
      "Choose a length for your password"
    );
    //if number entered is less than 8 or more than 128 - alert
    lengthValue = parseInt(inputLength);
    if (lengthValue < 8 || lengthValue > 128) {
      alert("Password must be between 8 and 128 characters");
    } else {
      break;
    }
  }

  console.log(lengthValue);

  //consts that ask yes/no confirm lowercase, uppercase, numbers, special
  includeLower = confirm("Do you want to include lowercase characters?");
  includeUpper = confirm("Do you want to include uppercase characters?");
  includeNum = confirm("Do you want to include numbers?");
  includeSpecial = confirm("Do you want to include special characters?");
}
//variable to store passwords
const passwordCharacters = []

function generatePassword() {

  //if include lowercase is answered true/yes - add lowercase letters to the password array
  if (includeLower) {
    password += lowerCaseCodes
  }

  //if include uppercase is answered true/yes - add uppercase letters to the password array
  if (includeUpper) {
    password += upperCaseCodes
  }

  //if include numbers is answered true/yes - add numbers to the password array
  if (includeNum) {
    password += numCodes
  }

  //if include special is answered true/yes - add special characters to the password array
  if (includeSpecial) {
    password += specialCodes
  }

  //loop through characters codes - when i is less than the character length, add 1 each time
  for (let i = 0; i < inputLength; i++) {

    //allocating a random character code to character variable - getting random number between 0 and character amount, making sure it is an integer using math.floor and resulting in a character code
    const characterCode =
      password[Math.floor(Math.random() * password.length)]
    passwordCharacters.push(characterCode)
  }
  console.log(passwordCharacters.join(""))
  return passwordCharacters.join('')
}

//linking to form and submit button on html DOM
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

//adding an event listener to generate the password for when the form is submitted
form.addEventListener('submit', e => {
  e.preventDefault();
  passwordCharacters.length = 0;
  generatePassword();
  passwordDisplay.innerText = passwordCharacters.join('');
})

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterLength(e) {
  const value = e.target.value
  characterLengthNumber.value = value
  characterLengthRange.value = value
}

includePrompts();

console.log("your password is: " + passwordCharacters)