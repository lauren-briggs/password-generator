# password-generator
Week 03 homework assignment - using Javascript to generate a password

For this weeks assignment I tried a few different ways to create the password generator - I had some issues with the alert boxes so I ended up creating a form 
![screenshot.](assets/img/ScreenShot2021-03-15_01.png) and linking the javascript to the form in index.html instead.


After creating the form in the [html doc](index.html), I linked the html ids and classes to the javascript doc by creating [variables](Assets/img/ScreenShot2021-03-15_02.png) - the video that I was referencing used constants instead of regular variables which I had to look up [here](https://www.w3schools.com/js/js_const.asp)

I then created [arrays](Assets/img/ScreenShot2021-03-15_03.png) for each different type of character (uppercase, lowercase, number and special) using their [character codes](https://www.petefreitag.com/cheatsheets/ascii-codes/)

The character length input text box and the slider are not inherently linked so I then connected them using js, and then linked the input value and checkboxes with const (const characterAmount = characterLengthNumber.value / const includeLowercase = includeLowercaseElement.checked)

The generatePassword function takes these constants and returns a string in a new constant passwordCharacters using a loop, math.Floor and math.Random 