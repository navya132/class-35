var ball;
var database;
var ball1, position;
function setup(){
    //creating database
    database= firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
//reffering of the ball's position in the database
    ball1= database.ref('ball/position')
//used as a listener to document the change
    ball1.on('value', readPosition, showError)

}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    //reffering and updating the x and y values in the database
    database.ref('ball/position').set({
        x: position.x + x, 
        y: position.y + y
    })

}
 function readPosition(data){
     //reading the values from the database
     position = data.val()
     //assigning ball's x and y positions with the database x and y positions
     ball.x= position.x
     ball.y= position.y
 }

function showError() {
    console.log('error in writing the value in database')
}


