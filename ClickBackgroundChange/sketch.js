var on = false;

function setup() 
{
    createCanvas(600, 600);
    inc = 0;
    trigg = 0;
}

function draw()
{
    
    //col = map(mouseX, 0, 600, 0, 255);
    //background(0, col, 128);
    //background(0, 220, 220);
    
    if (on == false)
    {
        background(0, 220, 220);
    }
    
    if (on == true)
    {
        background(0, 195, 195);
    }
    
}
function mousePressed()
{
    on = !on;
}
