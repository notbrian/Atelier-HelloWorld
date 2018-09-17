function setup() {
    createCanvas(720, 480)
}

function draw() {
    background("#19baff")
    for (let i = 0; i < 50; i++) {
        ellipse(random(width), random(height), 50, 50)
    }
}