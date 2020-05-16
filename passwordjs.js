
var generate = document.querySelector('#generate')
var cntC = document.querySelector('#copy')

var result = document.querySelector('#password')

var nums = "1234567890"

var special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"

var ucle = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lcle = "abcdefghijklmnopqrstuvwxyz";
var possibleChar = [];
var modal = document.getElementById("selectionModal");
var closeModal = document.getElementsByClassName("close")[0];
let modalContent = document.querySelector(".modal-content");
var possiblePassword = '';
let yesB = document.getElementById("yesB")
let noB = document.getElementById("noB")
var specialchar;
var numberpass;
var lowercase;
var uppercase;
var passwordL = 8;

let optionsArr = ['Do you want special characters?', 'Do you want numbers in the password?', 'Do you want lower case characters?', 'Do you want Uppercase characters?']
let q = 0;


function modalFun() {
    let pos = 0;
    let o = 0;
    let id = setInterval(frame, 5)

    modalContent.children[1].textContent = optionsArr[q]
    modal.style.display = "block"
    function frame() {
        if (pos == 100) {
            clearInterval(id);
        } else {
            pos++;

            modalContent.style.top = pos + "px";
            modalContent.style.opacity = o += .01;
        }
    }



}
generate.addEventListener("click", function () {
    passwordL = Number(prompt('Choose the length of your password between 8 and 128 characters'))
    if (passwordL === null) {
        return
    } else if (typeof passwordL === "string" || isNaN(passwordL)) { alert('Invalid input') } else {
        while ((passwordL < 8) ||
            (passwordL > 128)
        ) {

            if (passwordL === null) { return } else {
                alert('Invalid input, between 8 and 128 characters')
                passwordL = prompt('Choose the length of your password between 8 and 128 characters');
            }
        }
        modalFun()
    }


})
yesB.addEventListener("click", function () {
    switch (q) {
        case 0:
            specialchar = true;
            q++
            modalContent.children[1].textContent = optionsArr[q]
            break;
        case 1:
            numberpass = true;
            q++
            modalContent.children[1].textContent = optionsArr[q]
            break;
        case 2:
            lowercase = true;
            q++
            modalContent.children[1].textContent = optionsArr[q]
            break;
        case 3:
            uppercase = true;
            q = 0;
            modal.style.display = "none"
            findPassword()
            break;
    }

})
noB.addEventListener("click", function () {
    switch (q) {
        case 0:
            specialchar = false
            q++;
            modalContent.children[1].textContent = optionsArr[q]
            break;
        case 1:
            numberpass = false;
            q++
            modalContent.children[1].textContent = optionsArr[q]
            break;
        case 2:
            lowercase = false;
            q++
            modalContent.children[1].textContent = optionsArr[q]
            break;
        case 3:
            uppercase = false;
            q = 0
            modal.style.display = "none"
            findPassword()
            break;
    }

})
closeModal.addEventListener("click", function () {
    q = 0;
    modal.style.display = "none"
})

function findPassword() {
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
        if (possiblePassword !== undefined) {
            result.textContent += possiblePassword;
        } else {
            result.textContent = "So which characters you want me to use for the password again???"
        }



    }
}

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

cntC.addEventListener('click', function copyPassword() {

    result.select();

    document.execCommand('copy')

})