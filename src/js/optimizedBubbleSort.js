async function optimizedBubbleSort() {
    if (!looping) {
        return;
    }

    if (valueArray[j] > valueArray[j + 1]) {
        await swap(j, j + 1);
    }

    j++;
    if (j >= n - i - 1) {
        j = 0;
        sortedPositions.push(n - i - 1);
        i++;
        if (swaps == 0) {
            finishedSorting();
            return;
        }
        swaps = 0;
    }

    if (i >= n) {
        finishedSorting();
        return;
    }

    activePositions = [j];
    await visualize();
}