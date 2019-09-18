var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var scr = new Text(score);                    // Create a text element

createButton('Button', btnPress);
createButton('+20', btnPress);

changeTitle('Button Clicker 2.0');

setInterval(btnPress, 1000);

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
