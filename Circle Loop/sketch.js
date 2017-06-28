var circle =
{
    x: 300,
    y: 300
};

function setup() 
{
    createCanvas(600, 600);
}

function draw()
{
    
    background(0, 220, 220);
    stroke(255);
    strokeWeight(2);
    for(var x = 0; x <= mouseX; x=x+50)
    {
        for(var y = 0; y <= mouseY; y=y+50)
        {
            ellipse(x, y, 35, 35);
            fill(random(0,255), 195, 195);
        }
    }
    
}
function mousePressed()
{
    
}