function Ball(x, y)
{
    this.x = x;
    this.y = y;
    this.diam = 40;
    this.fade = 255;
    
    this.createBall = function()
    {
        stroke(255, 255, 255);
        strokeWeight(2);
        //noFill();
        fill(255, 255, 255, this.fade);
        ellipse(this.x, this.y, this.diam, this.diam);
    }
    
    this.move = function()
    {
        //moves the ball
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);   
    }
    
    this.lifespan = function()
    {
        this.fade = this.fade - 1;
    }
    
    this.isFinished = function()
    {
        if(this.fade <= 0)
        {
            return true;
        }
        else(this.fade > 0)
        {
            return false;
        }
    }
}