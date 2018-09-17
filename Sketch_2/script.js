var inputColor = [0, 0, 0]


function setup() {
    createCanvas(400, 400)
    createP('Red')
    var red_input = createInput("0", 'range')
    red_input.input(redValue);

    createP('Blue')
    var blue_input = createInput("0", 'range')
    blue_input.input(blueValue);

    createP('Green')
    var green_input = createInput("0", 'range')
    green_input.input(greenValue);
}

function draw() {
    background(inputColor[0], inputColor[1], inputColor[2])
    rectMode(CENTER)
    noStroke()
    fill(mouseX, mouseY, mouseX)
    rect(mouseX, mouseY, 50, 50)
}

function redValue() {
    inputColor[0] = map(this.value(), 0, 100, 0, 255)
}


function blueValue() {
    inputColor[1] = map(this.value(), 0, 100, 0, 255)
}


function greenValue() {
    inputColor[2] = map(this.value(), 0, 100, 0, 255)
}