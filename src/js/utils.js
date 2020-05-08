async function swap(a, b) {
    swaps++;
    let temp = valueArray[a];
    valueArray[a] = valueArray[b];
    valueArray[b] = temp;
}

function map(x, a, b, p, q) {
    let slope = (q - p) / (b - a);
    return p + slope * (x - a);
}

function noLoop() {
    if (loopID) {
        clearInterval(loopID);
    }
    loopID = undefined;
}

function finishedSorting() {
    noLoop();
    // sorted = true;
    looping = false;
    sortedPositions.length = activePositions.length = 0;
    visualize(true);
}

async function setSize(w, h) {
    if (w != undefined && h != undefined) {
        width = w;
        height = h;
    }
    else {
        width = (window.innerWidth * widthRatio) - ((window.innerWidth * widthRatio) % scale);
        height = window.innerHeight * heightRatio;
    }
    canvas.width = width;
    canvas.height = height;
}

function randInt(low, high) {
    return Math.floor(Math.random() * (high - low)) + low;
}

async function initializeArray() {
    let arrayInit = document.getElementById('arrayInit').value;

    // Reseting the value array and active array
    valueArray.length = activePositions.length = sortedPositions.length = 0;

    // Getting the number of elements
    n = Math.floor(width / scale);
    setSize(n * scale, height);

    let low = 20;
    let high = height;

    // Populating the array based on user input
    if (arrayInit == "random") {
        for (let i = 0; i < n; i++) {
            valueArray.push(randInt(low, high));
        }
    }
    else if (arrayInit == "sorted") {
        for (let i = 0; i < n; i++) {
            valueArray.push(Math.floor(map(i, 0, n - 1, low, high)));
        }
    }
    else if (arrayInit == "revSorted") {
        for (let i = 0; i < n; i++) {
            valueArray.push(Math.floor(map(i, 0, n - 1, high, low)));
        }
    }
    else if (arrayInit == "incDec") {
        let i = 0;
        for (; i <= parseInt(n / 2); i++) {
            valueArray.push(Math.floor(map(i, 0, parseInt(n / 2), low, high)));
        }
        for (; i < n; i++) {
            valueArray.push(Math.floor(map(i, parseInt(n / 2) + 1, n - 1, high, low)));
        }
    }
    else if (arrayInit == "decInc") {
        let i = 0;
        for (; i <= parseInt(n / 2); i++) {
            valueArray.push(Math.floor(map(i, 0, parseInt(n / 2), high, low)));
        }
        for (; i < n; i++) {
            valueArray.push(Math.floor(map(i, parseInt(n / 2) + 1, n - 1, low, high)));
        }
    }
}

async function setSortingFunction() {
    let sortingChoiceVal = document.getElementById('sortingFunction').value;

    if (sortingChoiceVal == "bubble") {
        sortingFunction = bubbleSort;
        i = j = 0;
    }
    else if (sortingChoiceVal == "optiBubble") {
        sortingFunction = optimizedBubbleSort;
        i = j = swaps = 0;
    }
    else if (sortingChoiceVal == "selection") {
        sortingFunction = selectionSort;
        i = j = pos = 0;
    }
    else if (sortingChoiceVal == "insertion") {
        sortingFunction = insertionSort;
        i = 1;
        j = 0;
        value = valueArray[1];
    }
}

async function visualize(sorted) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < valueArray.length; i++) {
        if (sorted || false) {
            context.fillStyle = sortedColor;
        }
        else if (activePositions.includes(i)) {
            context.fillStyle = activeColor;
        }
        else if (sortedPositions.includes(i)) {
            context.fillStyle = sortedColor;
        }
        else {
            context.fillStyle = valueColor;
        }
        context.fillRect(i * scale + offset, height, scale - (2 * offset), - valueArray[i]);
        context.lineWidth = 1;
        context.strokeRect(i * scale + offset, height, scale - (2 * offset), - valueArray[i]);
    }
}

function startButton() {
    animate();
}

function pauseButton() {
    looping = false;
    noLoop();
}

function resetButton() {
    noLoop();
    initialize();
}

function getFps() {
    fps = parseInt(map(parseInt(document.getElementById('speedRange').value), 0, 100, 1, 100));
    if (looping == true) {
        animate();
    }
}

async function getScale() {
    scale = parseInt(map(parseInt(document.getElementById("arraySizeRange").value), 0, 100, 80, 10));
}