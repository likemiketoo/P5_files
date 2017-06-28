//Creates Object array
var balls = [];

function setup() 
{
    createCanvas(600, 600);
}

function mousePressed()
{
    var b = new Ball(mouseX, mouseY);
    balls.push(b);
}

function draw()
{
    //Creates the ball
    background(0, 220, 220);
    
    //loops through all the previously created ball array instances
    for(var a = balls.length - 1; a >= 0; a--)
    {
        balls[a].move();
        balls[a].lifespan();
        balls[a].createBall();
        //if (balls[a].fade <= 0)
        if (balls[a].isFinished())
        {
            balls.splice(a, 1);
        }
    }
}


//function keyPressed()
//{
//    //removes the last clicked in object
//    balls = shorten(balls);
//    //balls.pop();
//    //balls.splice(0, 1);
//}