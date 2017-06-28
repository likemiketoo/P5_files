//Creates Object array
var ball = [];

function setup() 
{
    createCanvas(600, 600);
    
    //Loop fills up the array
    for(var i = 0; i <= 100; i++)
    {
        ball[i]= 
        {
            //generates random starting point
            x: random(0, width),
            y: random(0, height),
            
            createBall: function()
            {
                stroke(255, 255, 255);
                strokeWeight(2);
                ellipse(this.x, this.y, 35, 35);
                noFill();
            },

            move: function()
            {
                //moves the ball
                this.x = this.x + random(-1,1);
                this.y = this.y + random(-1,1);
                //Alternatively you could use this.x and this.y
            }

        }
    }
}

function draw()
{
    //Creates the ball
    background(0, 220, 220);
    
    //loops through all the previously created ball array instances
    for(var a = 0; a < ball.length; a++)
    {
        ball[a].createBall();
        ball[a].move();
        //ball.edgeBounce();
    }
}