async function quickSort(start, end) {
    if (start >= end) {
        return;
    }

    let pivot = await partition(start, end);
    await Promise.all([
        quickSort(start, pivot - 1),
        quickSort(pivot + 1, end)
    ]);
}

async function partition(start, end) {
    for (let i = start; i <= end; i++) {
        stateArray[i] = 0;
    }

    let pivotIndex = start;
    let pivotValue = valueArray[end];

    for (let i = start; i < end; i++) {
        if (valueArray[i] < pivotValue) {
            await swap(pivotIndex, i, true);
            stateArray[pivotIndex] = 2;
            pivotIndex++;
            stateArray[pivotIndex] = 1;
        }
    }

    await swap(pivotIndex, end, true);

    for (let i = start; i <= end; i++) {
        // this is sorted now
        stateArray[i] = -1;
    }

    return pivotIndex;
}