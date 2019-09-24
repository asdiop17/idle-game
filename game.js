var welcome = new Title('The Survivor');
var woodButton = new Button('Collect Wood', increaseWood);
var wood = 0;
var woodcount = new Text(wood);






function increaseWood() {
  wood++;
  woodcount.edit(wood);
}

var metalButton = new Button('Collect Metal', increaseMetal);
var metal = 0;
var metalcount = new Text(wood);

function increaseMetal(){
  metal++;
  metalcount.edit(metal)
}

if (metalcount == 50);
new Button ('Collect Food');