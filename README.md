# 03 JavaScript: Password Generator


## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```


// Resubmit of password generator

Instead of using character codes - used the actual characters themselves.

Created variables for the prompts asking questions

Created a password variable to hold the password

Created a function to run the prompts - the first prompt asking how long the user wants the password to be - running a for loop (for (; ;) - infinite - allowing the user to enter a number, and if the number is lower than 8 or higher than 128 an error/alert will appear. If it is inbetween those numbers (else{}) break said function.

Then console.log the users input/value

The next questions all have boolean responses (true/false) so the pop up is a confirm message rather than a prompt.

creating a function to generate password using the users responses - if statements - if the users confirms includeLower then add (+=) the lowerCaseCodes to the password variable string. Repeat for the remaining variables.

Created a for loop within generatePassword function that uses the users chosen inputLength value. New const (characterCode) to hold the characters and running Math.floor(Math.random) with the password string to return a random selection of characters (characterCode) - pushing the characterCode to the passwordCharacters array.

Console.log the passwordCharacters and .join("")
return passwordCharacters.join('') - returning the passwordCharacters array as a string.

Creating a const (form) to link to the HTML DOM form
Creating a const (passwordDisplay) to link to the HTML DOM element that will display the generated password.

Adding an event listener to the event of form submit
Preventing default browser refresh.
Resettinh password character length so that each time it is clicked it starts from 0 - doesn't add to the previously generated password
Calling the generatePassword function
adding the generated password string to the innerText of the password display on the DOM

Calling the includePrompts function

Console log the final outcome