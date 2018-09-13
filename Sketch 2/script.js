var mouseClicks = [];

function setup() {
    createCanvas(720, 480)
}

function draw() {
    for (let i = 0; i < mouseClicks.length; i++) {
        ellipse(mouseClicks[i].x,mouseClicks[i].y, 10)
        mouseClicks[i].x = mouseClicks[i].x + mouseClicks[i].speed
        mouseClicks[i].y = mouseClicks[i].y + mouseClicks[i].speed

    }
}

function mouseClicked() {
    var clickPosition = {
        x: mouseX,
        y: mouseY,
        speed: random(-2, 2)
    }
   
    mouseClicks.push(clickPosition)
}