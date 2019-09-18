var score = 0;

postToPage(score);

createButton('Button', btnPress);
createButton('+20', btnPress);

changeTitle('Button Clicker 2.0');

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
}

