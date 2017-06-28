var circle =
{
    x: 300,
    y: 300
};

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
    background(0, 220, 220);
    //ellipse(circle.x, circle.y, 50, 50);
    //ellipse(random(0,width), random(0,height), 50, 50);
    ellipse(mouseX, mouseY, 50, 50);
    fill(0, 195, 195);
    noStroke();
    if(((mouseX > 200) && (mouseX < width - 200))&&((mouseY > 200) && (mouseY < width - 200)))
    {
        ellipse(mouseX, mouseY, 100, 100);
    }
    
    
    
}
function mousePressed()
{
    
}
/*
function bounceFunc()
{
    if (inc < 10)
    {
        trigg = 0;
    }
    if (trigg == 0)
    {
        ellipse(inc, mouseY, 50, 50);
        inc = inc + 3;  
    }
    if (inc > width - 10)
    {
        trigg = 1;
    }
    if (trigg == 1)
    {
        ellipse(inc, mouseY, 50, 50);
        inc = inc - 3;  
    }
}
*/