var inputFun = function(){

    prompt('choose the length of your password between 8 and 128 characters')
if ((Number(passwordL) < 8) ||
(Number(passwordL) > 128) ||
(passwordL = String)
){
    alert('invalid input')

    passwordL = prompt('choose the length of your password between 8 and 128 characters');

    if ((Number(passwordL) < 8) ||
(Number(passwordL) > 128) ||
(passwordL = String)
){
    alert('invalid input')

    passwordL = prompt('choose the length of your password between 8 and 128 characters');

};

};


}

var passwordL = inputFun()
var specialchar = confirm('do you want special characters?');
var numberpass = confirm('do you want numbers in the password?');
var lowercase = confirm('do you want lower case characters?');
var uppercase = confirm('do you want Uppercase characters?');
var generate = document.querySelector('generate')
var cntC = document.querySelector('copy')

var result = document.querySelector('password')

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var letters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var ucletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lcletters = "abcdefghijklmnopqrstuvwxyz"

generate.addEventListener('click', function(){


})

cntC.addEventListener("click", function () {


})