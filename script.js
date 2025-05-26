function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent('canvasContainer');
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        stroke(0);
        strokeWeight(5);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}