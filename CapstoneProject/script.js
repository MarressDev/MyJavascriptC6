// Declare Variables

let arr = [];
let passMask = [];
let arrStr;
let passMaskStr;

// This section handles the modal popup window actions when a user clicks button to "generate password"

const close = document.getElementById("close")
const open = document.getElementById("open")
const modal = document.getElementById("modal")

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener('click', e => {
    e.target === modal ? modal.classList.remove('show-modal') : false;
})

// This function submitAnswers() captures the selected password criteria checkboxes and makes an array of the selections. It then calls the next function and passes the array as an argument

function submitAnswers() {
    var form = document.querySelector('form');
    var selections = '';
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    
      document.querySelectorAll('input[type=checkbox]')
        .forEach(function(item) {
          if (item.checked) {
            selections = item.id + item.value;
            arr.push(selections);
          }
        });
    console.log("1st function ran")
    genPasswordFromResults(arr)
    })
    };


// This function converts the original passed in array to a string and then searches the string for keywords used to determine what to include in the generated password. It creates an array of those "mask" values that are used to determine what criteria to include in the generated password.

function genPasswordFromResults(arr) {
    arrStr = arr.toString()
    console.log(arrStr)
    if (arrStr.includes("lowercase")) {
        passMask.push("a")
    } 
    if (arrStr.includes("uppercase")) {
        passMask.push("A")    
    } 
    if (arrStr.includes("digit")) {
        passMask.push("#")
    } 
    if (arrStr.includes("special")) {
        passMask.push("!")
    }
    passMaskStr = passMask.join("")
genFinalPassword(12, passMaskStr)
};

// This function takes the string which is used as a mask to determine characters to include and then generates a random password

function genFinalPassword(length, passMaskStr) {
    var mask = '';
    if (passMaskStr.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (passMaskStr.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (passMaskStr.indexOf('#') > -1) mask += '0123456789';
    if (passMaskStr.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    // console.log(result);
    // return result;
    addVal(result)
}

//This Function takes the result and prints it to the field and closes the modal window 
function addVal(result) {
    document.getElementById("passwordfieldid").value = result
    modal.classList.remove("show-modal")
}