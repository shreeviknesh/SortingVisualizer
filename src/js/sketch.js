let canvas;
const widthRatio = 0.90;
const heightRatio = 0.67;

let scale = 15;
let fps = 30;

const backgroundColor   = "#004346";
const activeColor       = "#FF3CC7";
const valueColor        = "#39CCCC";
const sortedColor       = "#01FF70";

let valueArray = [];
let activePositions = [];
let sortedPositions = [];

let sortingFunction;

let n;
let i, j, pos;
let swaps, insertionSortVal;

let sorted = false;
let looping = false;

function setup() {
    createCanvas(getWidth(), window.innerHeight * heightRatio);
    canvas = document.querySelector('canvas');
    initialize();
    noLoop();
}

function draw() {
    frameRate(fps);
    if(!sorted && looping) {
        background(backgroundColor);
        sortingFunction();
    }
}

let initialize = async () => {
    getFPS();
    sorted = false;
    looping = false;

    // Mapping from array-size to scale (inversely-proportional)
    scale = parseInt(map(parseInt(document.getElementById("arraySizeRange").value), 0, 100, 80, 5));

    // Initializing the array
    await initializeArray();
    await setSortingFunction();
    await visualizeArray();
}

let setSortingFunction = async () => {
    let sortingChoiceVal = document.getElementById('sortingFunction').value;
    if(sortingChoiceVal == "bubble") {
        sortingFunction = bubbleSort;
        i = j = 0;
    }
    else if(sortingChoiceVal == "optiBubble") {
        sortingFunction = optimizedBubbleSort;    
        i = j = swaps = 0;
    }
    else if(sortingChoiceVal == "selection") {
        sortingFunction = selectionSort;
        i = j = pos = 0;
    } 
    else if(sortingChoiceVal == "insertion") {
        sortingFunction = insertionSort;
        i = 1;
        j = 0;
        insertionSortVal = valueArray[1];
    }
}

let initializeArray = async () => {
    let arrayInit = document.getElementById('arrayInit').value;
    // Reseting the value array and active array
    valueArray.length = activePositions.length = sortedPositions.length = 0;
    
    // Getting the number of elements
    n = Math.floor(width / scale);

    // Populating the array based on user input
    if(arrayInit == "avgCase") {
        for(let iteration = 0; iteration < n; iteration++) {
            valueArray.push(Math.floor(random(height - 10)) + 10);
        }
    } 
    else if(arrayInit == "bestCase") {
        for(let iteration = 0; iteration < n; iteration++) {
            valueArray.push(Math.floor(map(iteration, 0, n, 10, height - 10)));
        }
    }
    else {
        for(let iteration = 0; iteration < n; iteration++) {
            valueArray.push(Math.floor(map(iteration, 0, n, height - 10, 10)));
        }
    }
}

let swap = async (a, b) => {
    swaps++;
    let temp = valueArray[a];
    valueArray[a] = valueArray[b];
    valueArray[b] = temp;
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
        if(sorted) {
            fill(sortedColor);
        }
        else if(activePositions.includes(iter)) {
            fill(activeColor);
        } 
        else if(sortedPositions.includes(iter)) {
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

const finishedSorting = () => {
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