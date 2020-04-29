const widthRatio = 0.95;
const heightRatio = 0.8;

const scale = 30;

// const bodyColor         = "#dddddd";
const bodyColor         = "#004346";
const backgroundColor   = "#004346";
const activeColor       = "#FF3CC7";
const valueColor        = "#00F6ED";

let array = [];
let n;
let i, j;
let frameRate = 1;

function initialize() {
    array = [];
    n = width / scale;
    for(let i = 0; i < n; i++) {
        array.push(random(height - 5) + 5);
    }
    i = j = 0;
    loop();
}

let getWidth = () => {
    return (window.innerWidth * widthRatio) - ((window.innerWidth * widthRatio) % scale);
}

function setup() {
    rotate(PI);
    createCanvas(getWidth(), window.innerHeight * heightRatio);
    initialize();
    document.body.style.background = bodyColor;
}

function windowResized() {
    resizeCanvas(getWidth(), window.innerHeight * heightRatio);
    initialize();
}

function draw() {
    background(backgroundColor);
    bubbleSort();    
}