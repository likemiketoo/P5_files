//Creates Object array
var balls = [];



function setup() 
{
    createCanvas(600, 600);
    
    //Loop fills up the array
    for(var i = 0; i <= 100; i++)
    {
        balls[i]= new Ball();
    }
}

function draw()
{
    //Creates the ball
    background(0, 220, 220);
    
    //loops through all the previously created ball array instances
    for(var a = 0; a < balls.length; a++)
    {
        balls[a].createBall();
        balls[a].move();
        //ball.edgeBounce();
    }
}

function mousePressed()
{
    balls.push(new Ball(mouseX, mouseY));
}

function keyPressed()
{
    //removes the last clicked in object
    balls = shorten(balls);
    //balls.pop();
    //balls.splice(0, 1);
}

function Ball(x,y)
{
    this.x = x;
    this.y= y;
    this.createBall = function()
    {
        stroke(255, 255, 255);
        strokeWeight(2);
        ellipse(this.x, this.y, 35, 35);
        noFill();
    }
    
    this.move = function()
    {
        //moves the ball
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);   
    }
}