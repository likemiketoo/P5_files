var ball =
{
    x: 300,
    y: 300,
    xspeed: 5,
    yspeed: -4
}

function setup() 
{
    createCanvas(600, 600);
}

function draw()
{
    //Creates the ball
    background(0, 220, 220);
    createBall(255,255,255);
    edgeBounce();
    move();
    
}
function createBall(ballRed, ballGreen, ballBlue)
{
    stroke(255);
    strokeWeight(2);
    ellipse(ball.x, ball.y, 35, 35);
    fill(ballRed, ballGreen, ballBlue);
}

function move()
{
    //moves the ball
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
}

function edgeBounce()
{
    //if it hits an edge invert the speed
    if(ball.x > width || ball.x < 0)
    {
        ball.xspeed = ball.xspeed * -1;
    }
    
    if(ball.y > height || ball.y < 0)
    {
        ball.yspeed = ball.yspeed * -1;
    }
}