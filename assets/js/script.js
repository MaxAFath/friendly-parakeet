// Assignment code here
var symbols = "!#$%&";
var num = "1234567890";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var count = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var str1;
  var str2;
  var str3;
  var charType;
  //ask user for pasword length
  var numLength = prompt("How long do you want the password to be? Please eneter a num between 8 - 128");
  if (numLength < 8 || numLength > 128) {
    numLength = prompt("Enter a num between 8-128");
  }
  // start by building a string to be used in password generation. Upper case means yes, lower means no

  //ask for user if they want to use lower case in password, will concatenate a upper or lower case letter to string charType, count being passed to userInput is for prompt array
  var input1 = userInput(count);
  // var str1 = !inpu1 ? 'l' : "L";
  count++;
  if (input1 === false) {
    str1 = "l";
  }
  else {
    str1 = "L";
  }

  //ask user if they want upper case in password, concats a lower u or upper U depending on response, count being passed to userInput is for prompt array
  var input2 = userInput(count);
  count++;
  if (input2 === false) {
    str2 = str1.concat("u");
  }
  else {
    str2 = str1.concat("U");
  }

  //ask user if they want numbers in password, concat lower n or upper N to string being build, count being passed to userInput is for prompt array
  var input3 = userInput(count);
  count++;
  if (input3 === false) {
    str3 = str2.concat("n");
  }
  else {
    str3 = str2.concat("N");
  }

  //ask user if they want special characters in password, concat lower s or upper S to string being build
  var input4 = userInput(count);
  count = 0;
  if (input4 === false) {
    charType = str3.concat("s");
  }
  else {
    charType = str3.concat("S");
  }

  console.log(charType);

  //check string for if no was answer to all questions
  if (charType === "luns") {
    window.alert("null paswords not allowed");
    writePassword();
  }
  //call to genereate password with peramiters 
  var password = generatePassword(numLength, charType);


  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}

function userInput(count){
  var userPrompt = ["Do you want to use lower case letters in password?", "Do you want to use uper case letters in this password", "Do you want numbers in this password?", "Do you want special characters in this password"]
  let boolCall = false;
  boolCall = confirm(userPrompt[count]);
  return boolCall;
}


function generatePassword(numLength, charType) {
  let holding = "";//the generated password

  while (holding.length < numLength) {
    var char = Math.floor(Math.random() * 5);
    if (char == 4) {
      if (charType.charAt(3) === "s") {
        char--;
      }
      else {
        holding = holding.concat(symbols.charAt(Math.floor(Math.random() * 5)));
      }
    }
    else if (char == 3) {
      if (charType.charAt(2) === "n") {
        char--;
      }
      else {
        holding = holding.concat(num.charAt(Math.floor(Math.random() * 10)));
      }
    }
    else if (char == 2) {
      if (charType.charAt(1) === "u") {
        char--;
      }
      else {
        holding = holding.concat(upper.charAt(Math.floor(Math.random() * 26)));
      }
    }
    else if (char == 1) {
      if (charType.charAt(0) === "l") {
        char--;
      }
      else {
        holding = holding.concat(lower.charAt(Math.floor(Math.random() * 26)));
      }
    }
  }
  if (testPassword(holding, charType)) {
    holding = generatePassword( numLength, charType);
  }

  return holding;
}

function testPassword(holding, charType) {//test password return false if password build includes all asked for variables
  var bool1 = false;
  var bool2 = false;
  var bool3 = false;
  var bool4 = false;
  //loops through the string holding, to see if the asked for characters in password are present. 
  for (var i = 0; i < holding.length; i++) {
    if ((charType.charAt(0) == "L")) {
      for (var l = 0; l < lower.length; l++) {
        if (holding.charAt(i) == lower.charAt(l)) {
          bool1 = true;
        }
      }
    }
    else if (charType.charAt(1) == "U") {
      for (var u = 0; u < upper.length; u++) {
        if (holding.charAt(i) == upper.charAt(u)) {
          bool2 = true;
        }
      }
    }
    else if ((charType.charAt(2) == "N")) {
      for (var n = 0; n < num.length; n++) {
        if (holding.charAt(i) == num.charAt(n)) {
          bool3 = true;
        }
      }
    }
    else if ((charType.charAt(3) == "S")) {
      for (var s = 0; s < symbols.length; s++) {
        if (holding.charAt(i) == symbols.charAt(s)) {
          bool4 = true;
        }
      }
    }
  }
  if (bool1 || bool2 || bool3 || bool4) {
    return false;
  }

  return true;//defult return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

