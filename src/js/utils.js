async function swap(a, b) {
    swaps++;
    let temp = valueArray[a];
    valueArray[a] = valueArray[b];
    valueArray[b] = temp;
}

async function setSortingFunction() {
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
        value = valueArray[1];
    }
}

async function initializeArray() {
    let arrayInit = document.getElementById('arrayInit').value;

    // Reseting the value array and active array
    valueArray.length = activePositions.length = sortedPositions.length = 0;
    
    // Getting the number of elements
    n = Math.floor(width / scale);

    // Populating the array based on user input
    if(arrayInit == "random") {
        for(let iteration = 0; iteration < n; iteration++) {
            valueArray.push(Math.floor(random(height - 10)) + 10);
        }
    } 
    else if(arrayInit == "sorted") {
        for(let iteration = 0; iteration < n; iteration++) {
            valueArray.push(Math.floor(map(iteration, 0, n-1, 10, height - 10)));
        }
    }
    else if(arrayInit == "revSorted") {
        for(let iteration = 0; iteration < n; iteration++) {
            valueArray.push(Math.floor(map(iteration, 0, n-1, height - 10, 10)));
        }
    }
    else if(arrayInit == "incDec") {
        for(let iteration = 0; iteration < n / 2; iteration++) {
            valueArray.push(Math.floor(map(iteration, 0, parseInt(n/2)-1, 10, height - 10)));
        }
        for(let iteration = n/2; iteration < n; iteration++) {
            valueArray.push(Math.floor(map(iteration, parseInt(n/2), n-1, height - 10, 10)));
        }
    }
    else if(arrayInit == "decInc") {
        for(let iteration = 0; iteration < n / 2; iteration++) {
            valueArray.push(Math.floor(map(iteration, 0, parseInt(n/2)-1, height - 10, 10)));
        }
        for(let iteration = n/2; iteration < n; iteration++) {
            valueArray.push(Math.floor(map(iteration, parseInt(n/2), n-1, 10, height - 10)));
        }
    }
}