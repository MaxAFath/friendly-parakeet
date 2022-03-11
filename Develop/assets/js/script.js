// Assignment code here
var symbols = "!#$%&";
  var num = "1234567890";
  var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //ask user for pasword length
  var numLength = prompt("How long do you want the password to be? Please eneter a num between 8 - 128");
  if((numLength < 8)||(numLength > 128)){
    numLength = prompt("Enter a num between 8-128");
  }
  // start by building a string to be used in password generation. Upper case means yes, lower means no

  //ask for user if they want to use lower case in password, will concatenate a upper or lower case letter to string charType
  var input1 = confirm("Do you want to use lower case letters in password?");
  if(input1 === false){
    var str1 = "l";
  }
  else{
    var str1 = "L";
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
//call to genereate password with peramiters 
  var password = generatePassword.call(password, numLength, charType);


  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}


function generatePassword(numLength, charType){
  let holding = "";//the generated password
  
  while(holding.length < numLength){
    var char = Math.floor(Math.random() * 5);
    if(char == 4){
      if (charType.charAt(3) === "s"){
        char--;
      }
      else{
        holding = holding.concat(symbols.charAt(Math.floor(Math.random()* 5)));
      }
    }
    else if(char == 3){
      if(charType.charAt(2) === "n"){
        char--;
      }
      else{
        holding = holding.concat(num.charAt(Math.floor(Math.random()*10)));
      }
    }
    else if(char == 2){
      if(charType.charAt(1) === "u"){
        char--;
      }
      else{
        holding = holding.concat(upper.charAt(Math.floor(Math.random()*26)));
      }
    }
    else if (char == 1){
      if(charType.charAt(0) === "l"){
        char--;
      }
      else{
        holding = holding.concat(lower.charAt(Math.floor(Math.random()*26)));
      }
    }
  }

  return holding;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

