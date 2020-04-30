const widthRatio = 0.90;
const heightRatio = 0.70;

let scale = 15;
let fps = 60;

const backgroundColor   = "#004346";
const activeColor       = "#FF3CC7";
const valueColor        = "#00F6ED";

let array = [];
let activePositions = [];
let n;
let i, j, swaps;
let pos = 0;
let sortingFunction;
let arrayInit = "avgCase";
let canvas;
let sorted = false;

function setup() {
    createCanvas(getWidth(), window.innerHeight * heightRatio);
    canvas = document.querySelector('canvas');
    noLoop();
    initialize();
}

function draw() {
    frameRate(fps);
    if(!sorted) {
        background(backgroundColor);
        sortingFunction();
    }
}

let initialize = async () => {
    val = document.getElementById('sortingFunction').value;
    arrayInit = document.getElementById('arrayInit').value;
    sorted = false;

    // Mapping from array-size to scale (inversely-proportional)
    scale = map(int(document.getElementById("arraySizeRange").value), 0, 100, 80, 5);

    // Initializing the array
    setSortingFunction().then(initializeArray).then(visualizeArray);
}

let setSortingFunction = async () => {
    if(val == "bubble") {
        sortingFunction = bubbleSort;
    }
    else if(val == "optiBubble") {
        sortingFunction = optimizedBubbleSort;
    }
    else if(val == "selection") {
        sortingFunction = selectionSort;
    }
}

let initializeArray = async () => {
    // Reseting the value array and active array
    array.length = activePositions.length = 0;
    
    // Getting the number of elements
    n = Math.floor(width / scale);

    // Populating the array based on user input
    if(arrayInit == "avgCase") {
        for(let i = 0; i < n; i++) {
            array.push(random(height - 10) + 10);
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
    
    // Setting all values to 0
    i = j = swaps = pos = 0;
}

let swap = async (a, b) => {
    swaps++;
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

let getWidth = () => {
    return (window.innerWidth * widthRatio) - ((window.innerWidth * widthRatio) % scale);
}

function windowResized() {
    resizeCanvas(getWidth(), window.innerHeight * heightRatio);
    canvas.style.margin = "auto";
    setup();
}

const getFPS = () => {
    fps = int(document.getElementById("speedRange").value);
}

const visualizeArray = async () => {
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
