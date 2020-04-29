const widthRatio = 0.8;
const heightRatio = 0.8;

const scale = 100;
let fps = 1;

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

function initialize() {
    noLoop();
    array.length = activePositions.length = 0;
    
    n = width / scale;
    // Populate the array using another function of either best case values, worst case values, random values
    for(let i = 0; i < n; i++) {
        array.push(random(height - 5) + 5);
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
    let val =document.getElementById('sortingFunction').value;
    if(val == "bubble") {
        sortingFunction = bubbleSort;
    }
    else if(val == "opti_bubble") {
        sortingFunction = optimizedBubbleSort;
    }
    else if(val == "selection") {
        sortingFunction = selectionSort;
    }
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
        rect(iter * scale, height, 1 * scale, -array[iter]);
    }
}