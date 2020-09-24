# password-generator

## Description

My Password Generator website provides a simple generator that prompts users for specific criteria to apply to the generated password. This website is perfect for creating a password with complex security standards because it prompts the users for: Numbers, Special Characters, Upper Case, and Lower Case. The password generator can also be applied to creating passwords for sensitive files on your computer like tax information, banking information, etc. This project was designed to teach me how to manipulate javascript by calling variables from the user's input and to apply them to the generatePassword function using if statements.

To use this application, the user will have to press the "Generate Password" button and then the user will be given a set of prompts that will apply to the, soon to be generated, password. The user will have to choose at least one criteria, from the prompts, for the application to generate a password. If no criteria is chosen, the user will be alerted that they need at least one criteria and will need to press the "Generate Password" button to be re-prompted the password criteria. This application is very user friendly and is recommended for strict password requirements.

## Table of Contents

- [Screenrecord](#screenrecord)
- [Installation](#installation)
- [Acceptance_Criteria](#acceptance_criteria)
- [Credits](#credits)
- [License](#license)

## Screenrecord

Demonstration of application:
https://drive.google.com/file/d/1b5joNUqHMFo-R-xRGICE-d5GSWQydscG/view

Embed code:

<iframe src="https://drive.google.com/file/d/1b5joNUqHMFo-R-xRGICE-d5GSWQydscG/preview" width="640" height="480"></iframe>

## Installation

The way to access this project is to go to my GitHub site and to clone my Password-Generator repository from here : https://github.com/Adellis95

Then you pull the cloned repository into your terminal/GitBash by using the "git pull (git@github.com:Adellis95/password-generator.git)

Afterwards, you change directories in your terminal until you are in the password-generator repository and open the file in your code editor by typing "code ."

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

## Credits

- https://github.com/jamierachael Jamie Rachael Morris. I used part of her script.js, shortened her if else statements, and fixed the errors produced in her code.

## License

© 2019 Horiseon Social Solution Services, Inc.

© 2020 Austin Ellis.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following coditions:

the above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS, FOR A PARTICULAR PURPOSE AND MONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
