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
// array State lookup:
//  1 - active1
//  2 - active2
// -1 - sorted
//  0 - nothing
let stateArray = [];

let swaps = 0;
let looping = false;
let sorted = true;
// let recursing = false;

let sortingFunction;

let loopID;

async function initialize() {
    noLoop();
    await getScale();
    await setSize();

    looping = false;
    sorted = false;
    swaps = 0;

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
    if ((sortingFunction == quickSort || sortingFunction == mergeSort) && !sorted) {
        if (sortingFunction == mergeSort) {
            speedRan.disabled = true;
        }
        loopID = setInterval(visualize, 1000 / fps);
        await sortingFunction(0, valueArray.length - 1);
        if (looping == false) {
            await sleep(250);
            finishedSorting();
        }
        else {
            finishedSorting();
        }
        speedRan.disabled = false;
    }
    else {
        noLoop();
        loopID = setInterval(sortingFunction, 1000 / fps);
    }
}

initialize();