var words = ["Hello!", "Hi!", "Aloha!", "Bonjour!", "Hola!"]
function setup() 
{
    createCanvas(600, 600);
}

function draw()
{
    background(200,0,0);
    textSize(40);
    fill(255, 255, 255);
    for(var i =0; i<=4;i++)
    text(words[i], 250, i *100 +100);
}