//Create variables here
var dog, happyDog, database, foodS, foodStock; 

function preload()
{
  //load images here
  dog = loadImage(images/dogImg);
  happyDog = loadImage(images/dogImg1);
}

function setup() {
  createCanvas(500, 500);
  
  var dog = createSprites(250, 400);
  dog.addImage(dogMg1);

  foodStock = database.ref(Food);
  foodStock.on("value", readstock);
  
}


function draw() {  

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
  }

  drawSprites();
  //add styles here

  textSize (50);
  text("Hint: Press the up arrow to feed your dog!", 250, 20);
  text("Food Left: " + foodStock,250, 250);

}

function readStoch(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  if (x<0) {
    x = 0;
  } else {
    x = x-1;
  }
  database.ref().update({
    Food:x
  })
}
