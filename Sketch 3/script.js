
var mySound

function setup() {
    createCanvas(720, 480)
    mySound = createAudio('sound.wav')
}

function draw() {
    background(255)
    ellipse(width/2, height/2, 30)
}

function mouseClicked() {
    if(dist(mouseX, mouseY, width/2, height/2) <= 15) {
        fill(100)
        mySound.play();
    }
}
