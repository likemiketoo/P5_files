var ball =
{
    x: 300,
    y: 300,
    xspeed: 5,
    yspeed: -4,
    ballRed: 255,
    ballGreen: 255,
    ballBlue: 255,
    createBall: function ()
    {
        stroke(255, 255, 255);
        strokeWeight(2);
        ellipse(this.x, this.y, 35, 35);
        fill(this.ballRed, this.ballGreen, this.ballBlue);
    },
    
    move: function()
    {
        //moves the ball
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        //Alternatively you could use this.x and this.y
    },
    
    edgeBounce: function()
    {
        //if it hits an edge invert the speed
        if(this.x > width || this.x < 0)
        {
            this.xspeed = this.xspeed * -1;
        }

        if(this.y > height || this.y < 0)
        {
            this.yspeed = this.yspeed * -1;
        }
    }
    
}

var ball2 =
{
    x: 300,
    y: 300,
    xspeed: 4,
    yspeed: -3,
    ballRed: 125,
    ballGreen: 125,
    ballBlue: 125,
    createBall: function ()
    {
        stroke(125, 125, 125);
        strokeWeight(2);
        ellipse(this.x, this.y, 35, 35);
        fill(this.ballRed, this.ballGreen, this.ballBlue);
    },
    
    move: function()
    {
        //moves the ball
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    },
    
    edgeBounce: function()
    {
        //if it hits an edge invert the speed
        if(this.x > width || this.x < 0)
        {
            this.xspeed = this.xspeed * -1;
        }

        if(this.y > height || this.y < 0)
        {
            this.yspeed = this.yspeed * -1;
        }
    }
    
}


function setup() 
{
    createCanvas(600, 600);
}

function draw()
{
    //Creates the ball
    background(0, 220, 220);
    ball.createBall();
    ball.move();
    ball.edgeBounce();
    
    ball2.createBall();
    ball2.move();
    ball2.edgeBounce();
    
}