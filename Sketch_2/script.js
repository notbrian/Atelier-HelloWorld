let state = {
    buttons: [],
    unlocked: false
}


for(var yPosition = 100; yPosition < 401; yPosition = yPosition + 150) {
   for (let xPosition = 100; xPosition < 401; xPosition = xPosition + 150) {
    state.buttons.push({
        x: xPosition,
        y: yPosition
    })
   }
  
}


function setup() {
    createCanvas(500,500)
}

function draw() {
    background(0)

  for (let index = 0; index < state.buttons.length; index++) {
      ellipse(state.buttons[index].x, state.buttons[index].y, 100)
      
  }


}

