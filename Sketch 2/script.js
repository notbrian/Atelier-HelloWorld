var mouseClicks = [];

function setup() {
    createCanvas(720, 480)
}

function draw() {
    for (let i = 0; i < mouseClicks.length; i++) {
        ellipse(mouseClicks[i].x,mouseClicks[i].y, 10)
        
    }
}

function mouseClicked() {
    var clickPosition = {
        x: mouseX,
        y: mouseY,
    }
   
    mouseClicks.push(clickPosition)
}