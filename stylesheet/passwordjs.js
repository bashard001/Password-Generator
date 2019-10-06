
var generate = document.querySelector('#generate')
var cntC = document.querySelector('#copy')

var result = document.querySelector('#password')

var nums = "1234567890"

var letters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var ucle = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lcle = "abcdefghijklmnopqrstuvwxyz";

var hopefully = [];
var newValues = "";
var possiblePassword = '';





generate.addEventListener('click', function () {

    var passwordL = prompt('choose the length of your password between 8 and 128 characters')
if ((Number(passwordL) < 8) ||
    (Number(passwordL) > 128)
) {
    alert('invalid input')

    passwordL = prompt('choose the length of your password between 8 and 128 characters');


};

    var specialchar = confirm('do you want special characters?');
var numberpass = confirm('do you want numbers in the password?');
var lowercase = confirm('do you want lower case characters?');
var uppercase = confirm('do you want Uppercase characters?');

    result.textContent = '';
    for (var i = 0; i < passwordL; i++) {
        if (uppercase === true) {
            var ucans = ucle.charAt(Math.floor(Math.random() * ucle.length));
            hopefully.push(ucans)
        }
        if (lowercase === true) {
            var lcans = lcle.charAt(Math.floor(Math.random() * lcle.length));
            hopefully.push(lcans)
        }
        if (specialchar === true) {
            var spans = letters.charAt(Math.floor(Math.random() * letters.length));
            hopefully.push(spans)
        }

        if (numberpass === true) {
            var numans = nums.charAt(Math.floor(Math.random() * nums.length));
            hopefully.push(numans)
        }

        //newValues = JSON.stringify(hopefully)

        possiblePassword = hopefully[Math.floor(Math.random() * hopefully.length
        )]

        result.textContent += possiblePassword;
         
        
    }
})

cntC.addEventListener('click', function copyPassword(){

    result.select();

    document.execCommand('copy')
    
 })