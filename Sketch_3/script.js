function setup() {
    createCanvas(1200,600)
}

function draw() {
    background(230)
    for (let index = 0; index < width; index=index + 25) {
        strokeWeight(5)
        stroke(map(mouseX, 0, width, 100, 255), 150, map(index, 0, width, 0, 255));
        line(index, index - mouseY - sin(index) * 300, mouseX, mouseY)
    }

    // for (let index = 0; index < height; index=index + 20) {
    //     strokeWeight(5)
    //     stroke(mouseX, 150, map(index, 0, height, 0, 255));
    //     line(0, index, mouseX, index)
    // }

}

