async function selectionSort() {
    if (!looping) {
        return;
    }

    if (valueArray[j] < valueArray[pos]) {
        pos = j;
    }

    j++;

    if (j >= n) {
        await swap(i, pos);
        sortedPositions.push(i);
        i++;
        pos = i;
        j = i;
    }

    if (i >= n - 1) {
        finishedSorting();
        return;
    }

    activePositions = [pos];
    await visualize();
}