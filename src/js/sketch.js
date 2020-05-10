let scale = 50;
let fps = 25;
const offset = 0; // this controls the space between the drawn rectangles
const widthRatio = 0.90;
const heightRatio = 0.67;

let canvas = document.getElementById('main-canvas');
let context = canvas.getContext('2d');
let height, width;
setSize();

const backgroundColor = "#222222";
const activeColor1 = "#FDB0C0";
const activeColor2 = "#8AB8FE";
const activeColor3 = "#FCFC81";
const valueColor = "#FD4659";
const sortedColor = "#2DFE54";

const resetBtn = document.getElementById("resetSorting");
const pauseBtn = document.getElementById('pauseSorting');
const speedRan = document.getElementById('speedRange');

let valueArray = [];
let stateArray = [];
// array State lookup:
//  1 - active1
//  2 - active2
// -1 - sorted
//  0 - nothing

let i, j, value, swaps, start, end;

let looping = false;
let sorted = true;
let seizure = false;

let sortingFunction;
let loopID;

async function initialize() {
    noLoop();
    await getScale();
    await setSize();

    looping = sorted = false;

    await initializeArray();
    await setSortingFunction();
    await visualize();
}
window.onresize = initialize;

async function animate() {
    if (sorted) {
        return;
    }
    looping = true;

    // Recursive sorting algorithms
    if ((sortingFunction == quickSort || sortingFunction == mergeSort) && !sorted) {
        if (sortingFunction == mergeSort) {
            speedRan.disabled = true;
        }
        loopID = setInterval(visualize, 1000 / fps);
        await sortingFunction(0, valueArray.length - 1);

        // Sort was interrupted before finishing
        if (looping == false) {
            await sleep(250);
            finishedSorting();
        }
        else {
            finishedSorting();
        }

        speedRan.disabled = false;
    }
    // Iterative sorting algorithms
    else {
        noLoop();
        loopID = setInterval(sortingFunction, 1000 / fps);
    }
}

initialize();