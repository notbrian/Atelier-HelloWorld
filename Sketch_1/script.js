function setup() {
    createCanvas(720, 480)
    var reset_Btn = createButton('reset')
    reset_Btn.mousePressed(clearScreen)
}

function draw() {
    
}

function mouseClicked() {
    noStroke()
    fill(random(100,255), random(100,255),random(100,255),)
    ellipse(mouseX, mouseY, random(10, 70))
}

function clearScreen() {
    background(255)
}