var mic

// Reference: https://p5js.org/reference/#/p5.AudioIn

function setup() {
    createCanvas(1200, 600)
    mic = new p5.AudioIn()
    mic.start();
}

function draw() {
    background(230)
    micLevel = mic.getLevel();
    for (let index = 0; index < width; index = index + map(mouseX, 0, width, 5, 40)) {
        strokeWeight(5)
        stroke(map(mouseX, 0, width, 100, 255), 150, map(index, 0, width, 0, 255));
        line(index, height/2, index, height/2 - sin(index) * (micLevel * 10000))
    }

    // for (let index = 0; index < height; index=index + 20) {
    //     strokeWeight(5)
    //     stroke(mouseX, 150, map(index, 0, height, 0, 255));
    //     line(0, index, mouseX, index)
    // }

}