var mouseClicks = [];

function setup() {
    createCanvas(720, 480)
    var button = createButton('Add Particle')
    button.mousePressed(addParticle);
}

function draw() {
    translate(width/2, height/2)
    for (let i = 0; i < mouseClicks.length; i++) {
        fill(mouseClicks[i].color);
        noStroke();
        ellipse(mouseClicks[i].x,mouseClicks[i].y, 10)
        mouseClicks[i].x = mouseClicks[i].x + mouseClicks[i].xSpeed
        mouseClicks[i].y = mouseClicks[i].y + mouseClicks[i].ySpeed

    }
}

function addParticle() {
    var clickPosition = {
        x: 0,
        y: 0,
        xSpeed: random(-2, 2),
        ySpeed: random(-2, 2),
        color: color(random(100, 255), random(100, 255), random(100, 255))
    }
   
    mouseClicks.push(clickPosition)
}