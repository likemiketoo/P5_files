//Creates Object array
var balls = [];

function setup() 
{
    createCanvas(600, 600);
    //Loop fills up the array
    for(var i = 0; i < 100; i++)
    {
        var x = random(width);
        var y = random(height);
        balls.push(new Ball(x, y));
        //balls[i]= new Ball(x, y);
    }
}

function mousePressed()
{
    for(var i = 0; i < balls.length; i++)
    {
        balls[i].clicked();
    }
}

function draw()
{
    background(0, 220, 220);
    //loops through all the previously created ball array instances
    for(var i = 0; i < balls.length; i++)
    {
        balls[i].move();
        balls[i].createBall();
        //ball.edgeBounce();
    }
}
