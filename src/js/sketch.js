let scale = 50;
let fps = 25;
const offset = 0; // this controls the space between the drawn rectangles
const widthRatio = 0.90;
const heightRatio = 0.67;

let canvas = document.getElementById('main-canvas');
let context = canvas.getContext('2d');
let height, width;
setSize();

const backgroundColor = "#222";
const activeColor = "#c2b9b0";
const valueColor = "#e7717d";
const sortedColor = "#afd275";

let valueArray = [];
// array State lookup:
// 1 - active
// -1 - sorted
// 0 - nothing
let stateArray = [];

let swaps = 0;
let looping = false;

let sortingFunction;

let loopID;

async function initialize() {
    noLoop();
    await getScale();
    await setSize();

    // sorted = false;
    looping = false;
    swaps = 0;

    await initializeArray();
    await setSortingFunction();
    await visualize();
}
window.onresize = initialize;

async function animate() {
    if (sortingFunction == quickSort) {
        quickSort(0, valueArray.length - 1).then(finishedSorting);
        loopID = setInterval(visualize, 1000 / fps);
    }
    else {
        noLoop();
        looping = true;
        loopID = setInterval(sortingFunction, 1000 / fps);
    }
}

initialize();