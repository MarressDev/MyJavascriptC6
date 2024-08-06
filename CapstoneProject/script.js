// New modal code

const close = document.getElementById("close")
const open = document.getElementById("open")
const modal = document.getElementById("modal")

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener('click', e => {
    e.target === modal ? modal.classList.remove('show-modal') : false;
})



// function submitAnswers() {
//     var form = document.querySelector('form');
//     var selections = '';
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         document.querySelectorAll('input[type=checkbox]')
//             .forEach(function (item) {
//                 if (item.checked) {
//                     selections = item.id + item.value + ',';
//                     arr.push(selections)
//                 }
//             })
//         console.log(arr);
//     }
 

let arr = [];

// function submitAnswers() {
// var form = document.querySelector('form');
// var selections = '';
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   document.querySelectorAll('input[type=checkbox]')
//     .forEach(function(item) {
//       if (item.checked) {
//         selections = item.id + item.value;
//         arr.push(selections);
//       }
//     });
//     // console.log("Submit Answer Function Ran")
// return arr;
// })
// };

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
       return arr;
    })
    };



function genPasswordFromResults(submitAnswers) {
    console.log("New")
    console.log(arr);

}

// let answerRes = answerResults()



// Modal Window Code Snippets below this line

// Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal)
// modal.style.display = "none";
//   }
// }





// Modal2

// Get the modal
// var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
// var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
// var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
// btn2.onclick = function() {
//   modal2.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span2.onclick = function() {
//   modal2.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal2) {
// modal2.style.display = "none";
//   }
// }

// End of code snippet for modal window





// function passwordPrompt() {
//         let text;
//         let person = prompt("Please enter your name:", "Harry Potter");
//         if (person == null || person == "") {
//           text = "User cancelled the prompt.";
//         } else {
//           text = "Hello " + person + "! How are you today?";
//         }
//         document.getElementById("demo").innerHTML = text;
//       }



// function genPassword(length, chars) {
//     var mask = '';
//     if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
//     if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (chars.indexOf('#') > -1) mask += '0123456789';
//     if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
//     var result = '';
//     for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
//     return result;
// }

// console.log(genPassword(8, 'a#A!')); //This code has all required characters
// console.log(genPassword(32, '#aA'));
// console.log(genPassword(128, 'a#A!'));

// console.log(genPasswordFromResults())