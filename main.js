var squares = document.querySelectorAll('.boxes');
//hover color on boxes
function hoverBg() {
  for (i = 0; i < squares.length; i++) {
    squares[i].classList.toggle('hovercolor');
  }
}

//button function
function displayButton() {
  var startButton =document.querySelector('button');
  startButton.classList.remove ('restart');
}
//event listener
for (i = 0; i < squares.length; i++) {
  squares[i].addEventListener('mouseenter', hoverBg);
  squares[i].addEventListener('mouseleave', hoverBg);
  squares[i].addEventListener('click', displayButton);
}

// create text node message
var message1 = document.createTextNode("Oooh - so close, but no cigar");
var message2 = document.createTextNode("DING DING DING - We have a winner");
var message3 = document.createTextNode("Oops, better luck next time");

// element to  that holds text
var messageText = document.createElement('p');

//where the the new element will be added on the page
var newContent = document.querySelector ('.squarerow');

function addMessage1() {
  messageText.appendChild(message1);
  newContent.appendChild(messageText);
}
function addMessage2() {
  messageText.appendChild(message2);
  newContent.appendChild(messageText);
}
function addMessage3() {
  messageText.appendChild(message3);
  newContent.appendChild(messageText);
}

//onclick message
squares [0].addEventListener ('click', addMessage1);
squares [1].addEventListener ('click', addMessage2);
squares [2].addEventListener ('click', addMessage3);
