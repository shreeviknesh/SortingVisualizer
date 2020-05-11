async function bogoSort() {
    if (!looping) {
        return;
    }

    let sortedCheck = await isSorted();
    if (sortedCheck) {
        finishedSorting();
        return;
    }

    await shuffleArray();
    await visualize();
}

async function isSorted() {
    for (let x = 1; x < valueArray.length; x++) {
        if (valueArray[x] < valueArray[x - 1]) {
            return false;
        }
    }
    return true;
}

async function shuffleArray() {
    for (let x = valueArray.length - 1; x >= 0; x--) {
        const y = Math.floor(Math.random() * (x + 1));
        await swap(x, y);
        if (!seizure) {
            stateArray[x] = randInt(0, 4);
        }
    }
}