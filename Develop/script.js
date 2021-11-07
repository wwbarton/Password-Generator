// create generatePassword function

//prompt user for lenghth
//error handling- did they submit a valid number?

//prompt use to confirm all symbol selctions
//error handling-- did the user select at least one option?

//use inputs to genereate password
// return the password from the generatePassword function

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

var submit;
var confirmLowerLetters;
var confirmUpperLetters;
var confirmNumber;
var confirmSymbol;
var accepted;

number = ["123456789"];

lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];

symbols = ["!~#$%&')(*+-./:;<=>?@][^`}"];

var upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
function generatePassword() {
  submit = parseInt(
    prompt("Password Length- Must be between 8 to 128 symbols long")
  );

  if (!submit) {
    alert("Choose a length");
  } else if (submit < 8 && submit > 128) {
    submit = parseInt(prompt("Must be 8 to 128 symbols long- Choose again!!!"));
  } else {
    confirmLowerLetters = confirm("Include Lower Case Letters?");
    confirmUpperLetters = confirm("Include Upper Case Letters?");
    confirmNumber = confirm("Include Numbers?");
    confirmSymbol = confirm("Include Special symbols?");
  }

  if (
    !confirmSymbol &&
    !confirmNumber &&
    !confirmUpperLetters &&
    !confirmLowerLetters
  ) {
    accepted = alert("You must choose at least one condition");
  } else if (
    confirmSymbol &&
    confirmNumber &&
    confirmUpperLetters &&
    confirmLowerLetters
  ) {
    accepted = symbols + number + lowerLetters + upperLetters;
  } else if (confirmSymbol && confirmNumber && confirmUpperLetters) {
    accepted = symbols + number + upperLetters;
  } else if (confirmSymbol && confirmNumber && confirmLowerLetters) {
    accepted = symbols + number + lowerLetters;
  } else if (confirmSymbol && confirmLowerLetters && confirmUpperLetters) {
    accepted = symbols + lowerLetters + upperLetters;
  } else if (confirmLowerLetters && confirmNumber && confirmUpperLetters) {
    accepted = lowerLetters + number + upperLetters;
  } else if (confirmSymbol && confirmNumber) {
    accepted = symbols + number;
  } else if (confirmSymbol && confirmLowerLetters) {
    accepted = symbols + lowerLetters;
  } else if (confirmSymbol && confirmUpperLetters) {
    accepted = symbols + upperLetters;
  } else if (confirmNumber && confirmLowerLetters) {
    accepted = number + lowerLetters;
  } else if (confirmNumber && confirmUpperLetters) {
    accepted = number + upperLetters;
  } else if (confirmLowerLetters && confirmUpperLetters) {
    accepted = lowerLetters + upperLetters;
  } else if (confirmSymbol) {
    accepted = symbols;
  } else if (confirmNumber) {
    accepted = number;
  } else if (confirmLowerLetters) {
    accepted = lowerLetters;
  } else if (confirmUpperLetters) {
    accepted = upperLetters;
  }

  var password = [];

  for (var i = 0; i < submit; i++) {
    var complete = accepted[Math.floor(Math.random() * accepted.length)];
    password.push(complete);
  }

  var pass = password.join("");
  UserInput(pass);
  return pass;
}

function UserInput() {
  document.getElementById("password");
}
