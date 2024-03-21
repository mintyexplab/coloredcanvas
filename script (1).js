// program instructions in readme.md because the fill command is giving me a very hard time (as always)


// drawomatic
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill("blue")
  // end
}

function draw() {
// empty

  
 
}

function mouseDragged() {
  circle(mouseX, mouseY, 50)
}

function keyPressed() {
  if (key === " ") {
    print("Your color has been changed to red ")
    fill("red")
  
  }
}

function doubleClicked() {
  print("You have cleared the screen")
  clear();
  background("black")

  
}


