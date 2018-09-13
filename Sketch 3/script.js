
var mySound
var bubble
function setup() {
    createCanvas(720, 480)
    mySound = createAudio('sound.wav')
    bubble = {
        x: width/2,
        y: height/2,
        r: 15
    }
}

function draw() {
    background(255)
    ellipse(bubble.x, bubble.y, bubble.r * 2)
    bubble.x = bubble.x + random(-5, 5);
    bubble.y = bubble.y + random(-5, 5);

    if(bubble.x > width | bubble.x < 0) {
        bubble.x = width/2
        bubble.y = height/2
    }
    if(bubble.y > height | bubble.y < 0) {
        bubble.x = width/2
        bubble.y = height/2
    }

}

function mouseClicked() {
    if(dist(mouseX, mouseY, bubble.x, bubble.y) <= bubble.r) {
        fill(100)
        mySound.play();
    }
}
