
// Reference: https://p5js.org/reference/#/p5/second

function setup() {
    createCanvas(700, 700)
    colorMode(HSB)
}

function draw() {
    background(230)
    translate(width/2, height/2)
   for (let index = 60; index > 0; index--) {
     if(index <= second()) {
        var color = map(index, 0, 60, 0, 360)
        fill(color, 50, 100,255)
     }
     else {
        fill(0,0,0,0)
     }
     ellipse(0, 0,  index * 11)
   }
}