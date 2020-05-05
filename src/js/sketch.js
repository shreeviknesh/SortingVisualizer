let canvas;
const widthRatio = 0.90;
const heightRatio = 0.67;

let scale = 15;
let fps = 30;

const backgroundColor = "#222";
const activeColor = "#c2b9b0";
const valueColor = "#e7717d";
const sortedColor = "#afd275";

let valueArray = [];
let activePositions = [];
let sortedPositions = [];

let sortingFunction;

let n;
let i, j, pos;
let swaps, value;

let sorted = false;
let looping = false;

async function setup() {
    createCanvas(getWidth(), window.innerHeight * heightRatio);
    canvas = document.querySelector('canvas');

    fps = int(document.getElementById("speedRange").value);
    sorted = false;
    looping = false;

    // Mapping from array-size to scale (inversely-proportional)
    scale = parseInt(map(parseInt(document.getElementById("arraySizeRange").value), 0, 100, 80, 5));

    // Initializing the array
    await initializeArray();
    await setSortingFunction();
    await visualizeArray();

    noLoop();
}

function draw() {
    frameRate(fps);
    if (!sorted && looping) {
        background(backgroundColor);
        sortingFunction();
    }
}

let getWidth = () => {
    return (window.innerWidth * widthRatio) - ((window.innerWidth * widthRatio) % scale);
}

function windowResized() {
    resizeCanvas(getWidth(), window.innerHeight * heightRatio);
    canvas.style.margin = "auto";
    setup();
}

const visualizeArray = async () => {
    // background(backgroundColor);
    clear();
    for (let iter = 0; iter < n; iter++) {
        if (sorted) {
            fill(sortedColor);
        }
        else if (activePositions.includes(iter)) {
            fill(activeColor);
        }
        else if (sortedPositions.includes(iter)) {
            fill(sortedColor);
        }
        else {
            fill(valueColor);
        }

        strokeWeight(1);
        // noStroke();
        rect(iter * scale, height, 1 * scale, - valueArray[iter]);
    }
}

function finishedSorting() {
    sorted = true;
    looping = false;
    visualizeArray();
    noLoop();
}

const startButton = () => {
    looping = true;
    loop();
}

const resetButton = () => {
    looping = false;
    noLoop();
    setup();
}

const pauseButton = () => {
    looping = false;
    noLoop();
}