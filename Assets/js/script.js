//linking html ids/classes to javascript variables

const characterLengthRange = document.getElementById('characterLengthRange')
const characterLengthNumber = document.getElementById('characterLengthNumber')

const includeUppercaseElement = document.getElementById('includeUpper')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialElement = document.getElementById('includeSpecial')

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

//arrays of numbers/characters/etc using their character codes
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
  ).concat(
    arrayFromLowToHigh(91,96)
  ).concat(
    arrayFromLowToHigh(123,126)
  )

//linking the password/character length range and input numbers
characterLengthNumber.addEventListener('input', syncCharacterLength)
characterLengthRange.addEventListener('input', syncCharacterLength)

form.addEventListener('submit', e => {
  e.preventDefault()
  //linking the number/value entered in the character length
  const characterAmount = characterLengthNumber.value
  //if uppercase is checked - include uppercase characters
  const includeUppercase = includeUppercaseElement.checked
  //if numbers is checked - include numbers
  const includeNumbers = includeNumbersElement.checked
  //if special characters is checked - include special characters
  const includeSpecial = includeSpecialElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial){
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSpecial) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
//variable to store passwords
  const passwordCharacters = []
  //loop through characters codes - when i is less than the character length, add 1 each time
  for (let i = 0; i < characterAmount; i++){
    //allocating a random character code to character variable - getting random number between 0 and character amount, making sure it is an integer using math.floor and resulting in a character code
    const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

function syncCharacterLength(e){
  const value = e.target.value
  characterLengthNumber.value = value
  characterLengthRange.value = value
}