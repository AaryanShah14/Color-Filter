function preload() {

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 600, 500);
    tint(tint_color);
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot() {
    save('user_name.png');
}