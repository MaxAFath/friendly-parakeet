// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //ask user for pasword length
  var numLength = prompt("How long do you want the password to be? Please eneter a num between 8 - 128");
  if((numLength < 8)||(numLength > 128)){
    numLength = prompt("Enter a num between 8-128");
  }
  // start of string to be used in password generation. Upper case means yes, lower means no
  var str1 = "";

  //ask for user if they want to use lower case in password, will concatenate a upper or lower case letter to string charType
  var input1 = confirm("Do you want to use lower case letters in password?");
  if(input1 === false){
    var str1 = "l";
  }
  else{
    var str2 = "L";
  }

  //ask user if they want upper case in password, concats a lower u or upper U depending on response
  var input2 = confirm("Do you want to use uper case letters in this password");
  if(input2 === false){
    var str2 = str1.concat("u");
  }
  else{
    var str2 = str1.concat("U");
  }

  //ask user if they want numbers in password, concat lower n or upper N to string being build
  var input3 = confirm("Do you want numbers in this password?");
  if(input3 === false){
    var str3 = str2.concat("n");
  }
  else{
    var str3 = str2.concat("N");
  }

  //ask user if they want special characters in password, concat lower s or upper S to string being build
  var input4 = confirm("Do you want special characters in this password");
  if(input4 === false){
    var charType = str3.concat("s");
  }
  else{
    var charType = str3.concat("S");
  }

  console.log(charType);

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

