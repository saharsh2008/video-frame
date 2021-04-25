function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 50, 540, 380);
    fill(255, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    fill(255, 128, 0);
    stroke(0, 128, 0);
    rect(90, 420, 460, 20);

    fill(255, 128, 0);
    stroke(0, 128, 0);
    rect(580, 40, 20, 380);

    fill(255, 128, 0);
    stroke(0, 128, 0);
    rect(40, 40, 20, 380);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 430, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);

}

function takeSnapshot() {
    save("image.png");
}
