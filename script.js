// User input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values:

character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Space is for the Uppercase conversion
space = [];

// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
  // Asks for user input
  enter = 0;
  while (!enter || enter < 8 || enter > 128) {
    enter = parseInt(
      prompt(
        "How many characters would you like your password? Choose between 8 and 128"
      )
    );
    console.log("enter = ", enter);
    if (!enter || enter < 8 || enter > 128) {
      alert("You must choose between 8 and 128");
    }
  }

  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");

  var choices = [" "];
  if (confirmNumber) {
    choices = choices.concat(number);
  }
  if (confirmCharacter) {
    choices = choices.concat(character);
  }
  if (confirmUppercase) {
    choices = choices.concat(alpha2);
  }
  if (confirmLowercase) {
    choices = choices.concat(alpha);
  }
  console.log("choices = ", choices);
  // password variable is an array placeholder for user generated amount of length
  var password = [];

  if (
    !confirmCharacter &&
    !confirmNumber &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    choices = alert("You must choose a criteria!");
    ps = "Your Secure Password";
  } else {
    // Start random selection variables:
    // Random selection for all variables:
    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
    }

    // This joins the password array and converts it to a string
    var ps = password.join("");
  }

  UserInput(ps);
  return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}
