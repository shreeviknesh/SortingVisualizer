const widthRatio = 0.9;
const heightRatio = 0.75;

let scale = 20;
let fps = 60;

const getFPS = () => {
    fps = int(document.getElementById("fpsRange").value);
}

const bodyColor         = "#004346";
const backgroundColor   = "#004346";
const activeColor       = "#FF3CC7";
const valueColor        = "#00F6ED";

let array = [];
let activePositions = [];
let n;
let i, j, swaps;
let pos = 0;
let sortingFunction = bubbleSort;
let arrayInit = "avgCase";

function initialize() {
    noLoop();
    scale = document.getElementById("scaleRange").value;
    array.length = activePositions.length = 0;
    n = Math.floor(width / scale);

    if(arrayInit == "avgCase") {
        for(let i = 0; i < n; i++) {
            array.push(random(height - 5) + 5);
        }
    } 
    else if(arrayInit == "bestCase") {
        for(let i = 0; i < n; i++) {
            array.push(map(i, 0, n, 10, height - 10));
        }
    }
    else {
        for(let i = 0; i < n; i++) {
            array.push(map(i, 0, n, height - 10, 10));
        }
    }
    
    i = j = swaps = pos = 0;
    visualizeArray();
}

let swap = (a, b) => {
    swaps++;
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

let getWidth = () => {
    return (window.innerWidth * widthRatio) - ((window.innerWidth * widthRatio) % scale);
}

function setup() {
    createCanvas(getWidth(), window.innerHeight * heightRatio);
    document.body.style.background = bodyColor;
    noLoop();
}

function windowResized() {
    noLoop();
    resizeCanvas(getWidth(), window.innerHeight * heightRatio);
    setTimeout(initialize, 1);
}

function getSortingFunction() {
    let val = document.getElementById('sortingFunction').value;
    if(val == "bubble") {
        sortingFunction = bubbleSort;
    }
    else if(val == "optiBubble") {
        sortingFunction = optimizedBubbleSort;
    }
    else if(val == "selection") {
        sortingFunction = selectionSort;
    }
    noLoop();
    setTimeout(initialize, 100);
}

function getArrayInitialization() {
    arrayInit = document.getElementById('arrayInit').value;
    noLoop();
    setTimeout(initialize, 100);

}

function draw() {
    frameRate(fps);
    background(backgroundColor);
    sortingFunction();
}

function visualizeArray() {
    background(backgroundColor);
    for(let iter = 0; iter < n; iter++) {
        if(activePositions.includes(iter)) {
            fill(activeColor);
        } 
        else {
            fill(valueColor);
        }
        
        strokeWeight(1);
        // noStroke();
        rect(iter * scale, height, 1 * scale, -array[iter]);
    }
}