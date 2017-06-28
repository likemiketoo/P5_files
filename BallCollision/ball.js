function Ball(x, y)
{
    this.x = x;
    this.y = y;
    this.xSpeed = 3;
    this.ySpeed = -2;
    this.col = color(255, 255, 255, 0);
    this.r = 22.5;
    this.flip = 1;
    
    this.createBall = function()
    {
        stroke(255, 255, 255);
        strokeWeight(2);
        fill(this.col)
        ellipse(this.x, this.y, this.r*2, this.r*2);
        
        //noFill();
    }
    
    this.move = function()
    {
        //Moves the ball
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);   
    }
    
    this.changeColor= function()
    {
        this.col = color(255, 255, 255, 100);
    }
    
    this.collide = function(a)
    {
        var d = dist(this.x, this.y, a.x, a.y);
        if (d < this.r + a.r)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    this.clicked = function()
    {
        var d = dist(mouseX, mouseY, this.x, this.y);
        
        //Checking to see if where you clicking is inside the circumference of the cirle, 35/2 because that is the diameter 
        if (d < (this.diam/2))
        {
            //Changes the color between 2 states every click
            if (this.flip == 1)
            {
                this.col = color(255, 255, 255, 110);
                this.flip = this.flip * -1;
            }
            else if (this.flip == -1)
            {
                this.col = color(255, 255, 255, 0);
                this.flip = this.flip * -1;
            }
        }
    }
    
}