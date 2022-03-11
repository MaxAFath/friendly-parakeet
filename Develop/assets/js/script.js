// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //ask user for pasword length
  var temp = " ";
  var numLength = prompt("How long do you want the password to be? Please eneter a num between 8 - 128");
  if((numLength < 8)||(numLength > 128)){
    numLength = prompt("Enter a num between 8-128");
  }
  //string to be used in password generation. Upper case means yes, lower means no
  var charType = "";

  //lines 19- ask for user input of y or n, will concatenate a upper or lower case letter to string charType
  temp = prompt("Do you want lower case used in password? Enter Y or N");
  while((temp != "y")||(temp != "Y") || (temp != "N") || (temp != "n")){
    temp = prompt("Please enter a y or n");
  }
  if((temp === "N")|| (temp === "n")){
    charType = charType.concat("l");
  }
  else{
    charType = charType.concat("L");
  }
  temp =" ";//clears temp of value

  //see line 18 for explination of code block
  temp = prompt("Do you want Upper case to be used in password? Enter Y or N");
  while((temp != "y")||(temp != "Y") || (temp != "N") || (temp != "n")){
    temp = prompt("Please enter a y or n");
  }
  if ((temp === "N") || (temp === "n")){
    charType = charType.concat("u");
  }
  else{
    charType = charType.concat("U");
  }
  temp = " ";//clears temp of value

  //see line 18 for explination of code block
  temp = prompt("Do you want numbers in this passwrod? Enter Y or N");
  while((temp != "y")||(temp != "Y") || (temp != "N") || (temp != "n")){
    temp = prompt("Please enter a y or n");
  }
  if((temp === "N") || (temp === "n")){
    charType = charType.concat("n");
  }
  else{
    charType = charType.concat("N");
  }
  temp = " ";//clears temp of value

  //see line 18 for explination of code block
  temp = prompt("Do you want special characters to be used in this password? Enter Y or N");
  while((temp != "y")||(temp != "Y") || (temp != "N") || (temp != "n")){
    temp = prompt("Please enter a y or n");
  }
  if((temp === "N")|| (temp === "n")){
    charType = charType.concat("s");
  }
  else{
    charType = charType.concat("S");
  }
  temp = " ";//clear temp of value

  //check string for if no was answer to all questions
  if(charType === "luns"){
    window.alert("null paswords not allowed");
    writePassword();
  }

  var password = generatePassword(numLength, charType);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(numLength, charType){

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

