touch = false
let myXPos = 100;
let myYPos = 100;
let enemyXPos = randNumGenerator(501);
let enemyYPos = randNumGenerator(501);
let r = randNumGenerator(256);
let g = randNumGenerator(256);
let b = randNumGenerator(256);
let score = 0
//    fill(255, 255, 255)
//    text("Score:", score, 140, 480);

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let img, img1;
function preload() {
  img = loadImage('w74lwum.png');
  img1 = loadImage('AXZWBXi.png');
}



// function setup() {
//   image(img, enemyXpos, enemyYpos);
// }


function setup() {
   createCanvas(500, 500);
   noStroke();


   imageMode(CENTER);
}

function randNumGenerator(maxNum){
    num2 = Math.floor((Math.random() * maxNum))
    return num2
}


function draw() {

   background(0);
   fill(255, 255, 255)
   textSize(22);

//    image(img, enemyXpos, enemyYpos);

image(img,enemyXPos,enemyYPos, 50, 50);
text("Score:"+score, 140, 480);


image(img1,myXPos,myYPos, 50, 50);


   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }


   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;


   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;


//    console.log(enemyXpos, enemyYPos, myXPos, myYPos);
   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
    touch = false

   }


   else {
    touch = true
    
    score++
 
    fill(random(255), random(255), random(255));
    enemyXPos = randNumGenerator(501);
    enemyYPos = randNumGenerator(501);
    r = randNumGenerator(256);
    g = randNumGenerator(256);
    b = randNumGenerator(256);    
    touch=false
     


   }
}
