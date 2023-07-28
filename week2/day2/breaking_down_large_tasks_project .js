let squareSize = 50
let squareX
let squareY
let squareColors = [[255,0,0],[0,255,0],[0,0,255]]
let delta = 50
function setup() {
  createCanvas(400, 400)
  squareX = width / 2
  squareY = 0
}
function randNumGenerator(maxNum){
    num2 = Math.floor((Math.random() * maxNum))
    return num2
}

function draw() {
  background(220)
    
  // Move the squares based on the horizontal position of the mouse
  squareX = mouseX
  
  // Draw the squares
  fill(squareColors[0])
  rect(squareX - squareSize / 2, squareY + squareSize / 2, squareSize, squareSize)
  fill(squareColors[1])
  rect(squareX - squareSize / 2, squareY + squareSize / 2 + squareSize + delta, squareSize, squareSize)
  fill(squareColors[2])
  rect(squareX - squareSize / 2, squareY + squareSize/2  + 2* squareSize + 2*delta, squareSize, squareSize)
}

function mouseClicked() {
    squareColors[0] = [randNumGenerator(256), randNumGenerator(256), randNumGenerator(256)]
    squareColors[1] = [randNumGenerator(256), randNumGenerator(256), randNumGenerator(256)]
    squareColors[2] = [randNumGenerator(256), randNumGenerator(256), randNumGenerator(256)]
}
