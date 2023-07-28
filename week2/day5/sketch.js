// // touch = false
let mySize = 10;
let myXPos = 60;
let myYPos = 35;
let myXPos_orig = myXPos
let myYPos_orig = myYPos
let score = 0

let myLeft, myRight, myTop, myBottom;


let maze_rectangles = [
    //border
    [45, 15, 10, 330],
    [80, 15, 10, 30],
    [80, 45, 300, 10],
    [45, 345, 345, 10],
    [380, 45, 10, 270],
    [45, 15, 35, 10],
 
    //vertical
    [120, 45, 10, 100],
    [225, 45, 10, 35],
    [320, 85, 10, 60],
    [120, 45, 10, 100],
    [225, 180, 10, 80],
    [185, 180, 10, 80],
    [185, 285, 10, 30],
 
     //horizontal
     [45, 80, 40, 10],
     [45, 120, 40, 10],
    [45, 180, 150, 10],
    [120, 145, 75, 10],
    [45, 180, 150, 10],
    [225, 180, 160, 10],
    [225, 145, 130, 10],
    [225, 75, 130, 10],
    [175, 110, 130, 10],
    [185, 315, 205, 10],
    [225, 250, 130, 10],
    [80, 220, 80, 10],
    [85, 280, 110, 10],
 
    //end
 
]

function point_in_rectangle(X, Y, rectangle, name=""){
    rect_left = rectangle[0];
    rect_right = rect_left + rectangle[2]
    rect_top = rectangle[1]
    rect_bottom = rect_top + rectangle[3]
    if (rect_left < X && rect_right>X && rect_top<Y && rect_bottom>Y) {
        return true
    }
    else {
        return false
    }
}

function touch_rectangle(rectangle){
    myLeft = myXPos - mySize/2;
    myRight = myXPos + mySize/2;
    myTop = myYPos - mySize/2;
    myBottom = myYPos + mySize/2;
    if (point_in_rectangle(myLeft,myTop, rectangle, "LT") || 
    point_in_rectangle(myRight, myTop, rectangle) ||
    point_in_rectangle(myLeft, myBottom, rectangle, "LB") ||
    point_in_rectangle(myRight, myBottom, rectangle)
    ) {
        return true
    }
    else {
        return false
    }
}

function setup() {
   createCanvas(500, 500);
   noStroke();
}


function draw() {
    console.log("hi")
    //rect(x, y, width, length)
   background(0);
   fill(0, 0, 255);
   //draws maze
   counter=0
   while (counter<maze_rectangles.length){
       rectangle=maze_rectangles[counter] 
       rect(rectangle[0], rectangle[1], rectangle[2], rectangle[3])
       counter++  
   }
   //end square
    fill(0, 255, 0)
   rect(370, 325, 20, 20)


 
  console.log(myXPos, myYPos)
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 1;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 1;
       
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 1;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 1;
   }
   counter = 0;
   touch = false
   while (counter<maze_rectangles.length){
    if (touch_rectangle(maze_rectangles[counter])){
        touch = true
    }
    counter++

}
    if (touch==true) {
        myXPos = myXPos_orig
        myYPos = myYPos_orig
    }
    fill(255, 0, 0)
    rect(myXPos-mySize/2,myYPos-mySize/2, mySize, mySize);
    if (touch_rectangle([370, 325, 20, 20])) {
        myXPos = myXPos_orig
        myYPos = myYPos_orig
        score ++ ;
    
    }
    text("Score:"+score, 140, 480);


}