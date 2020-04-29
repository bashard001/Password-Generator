
var generate = document.querySelector('#generate')
var cntC = document.querySelector('#copy')

var result = document.querySelector('#password')

var nums = "1234567890"

var special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"

var ucle = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lcle = "abcdefghijklmnopqrstuvwxyz";


var possiblePassword = '';



generate.addEventListener('click', function () {
    
    var passwordL = prompt('choose the length of your password between 8 and 128 characters')
    
while ((passwordL < 8) ||
    (passwordL > 128)
) {


    alert('invalid input')

    passwordL = prompt('choose the length of your password between 8 and 128 characters');


}
var possibleChar = [];

var specialchar = confirm('do you want special characters?');
var numberpass = confirm('do you want numbers in the password?');
var lowercase = confirm('do you want lower case characters?');
var uppercase = confirm('do you want Uppercase characters?');

    result.textContent = '';
    for (var i = 0; i < passwordL; i++) {
        if (uppercase === true) {
            var ucans = ucle.charAt(Math.floor(Math.random() * ucle.length));
            possibleChar.push(ucans)
            console.log(ucans)
        }
        if (lowercase === true) {
            var lcans = lcle.charAt(Math.floor(Math.random() * lcle.length));
            possibleChar.push(lcans)
            console.log(lcans)
        } 
        if (specialchar === true) {
            var spans = special.charAt(Math.floor(Math.random() * special.length));
            possibleChar.push(spans)
            console.log(spans)
        } 

        if (numberpass === true) {
            var numans = nums.charAt(Math.floor(Math.random() * nums.length));
            possibleChar.push(numans)
            console.log(numans)
        } 

        possiblePassword = possibleChar[Math.floor(Math.random() * possibleChar.length
        )]

        result.textContent += possiblePassword;
         
        
    }
})

cntC.addEventListener('click', function copyPassword(){

    result.select();

    document.execCommand('copy')
    
 })