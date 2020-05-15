
var generate = document.querySelector('#generate')
var cntC = document.querySelector('#copy')

var result = document.querySelector('#password')

var nums = "1234567890"

var special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"

var ucle = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lcle = "abcdefghijklmnopqrstuvwxyz";
var modal = document.getElementById("selectionModal");
var closeModal = document.getElementsByClassName("close")[0];
var possiblePassword = '';
let yesB = document.getElementById("yesB")
let noB = document.getElementById("noB")

let optionsArr = ['do you want special characters?','do you want numbers in the password?','do you want lower case characters?','do you want Uppercase characters?']
let q = 0;
generate.addEventListener("click", function(){
    let pos = 0;
    let o = 0;
    let id = setInterval(frame, 5)
    let modalContent = document.querySelector(".modal-content");
    modalContent.children[1].textContent = optionsArr[0]
modal.style.display= "block"
    function frame (){
        if (pos == 100) {
            clearInterval(id);
          } else {
            pos++; 
            
            modalContent.style.top = pos + "px";  
            modalContent.style.opacity = o += .01;
          }
    }
    

    
})

closeModal.addEventListener("click", function(){
modal.style.display= "none"
})



generateold.addEventListener('click', function () {
    
    var passwordL = prompt('choose the length of your password between 8 and 128 characters')
    
if ((passwordL < 8) ||
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