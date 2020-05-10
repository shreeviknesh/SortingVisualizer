let starting = true;
async function cocktailSort() {
    if (!looping) {
        return;
    }
    if (cocktailFirst) {
        if (starting) {
            i = start;
        }
        if (valueArray[i] > valueArray[i + 1]) {
            await swap(i, i + 1);
        }
        stateArray[i + 1] = 1;
        await visualize();
        stateArray[i + 1] = 0;
        i++;
        starting = false;
        if (i == end) {
            stateArray[i] = -1;
            cocktailFirst = false;
            starting = true;
            end--;

            if (swaps == 0) {
                finishedSorting();
                return;
            }
            swaps = 0;
        }
    }
    else {
        if (starting) {
            i = end - 1;
        }
        if (valueArray[i] > valueArray[i + 1]) {
            await swap(i, i + 1);
        }
        stateArray[i] = 1;
        await visualize();
        stateArray[i] = 0;
        i--;
        starting = false;

        if (i < start) {
            stateArray[i + 1] = -1;
            start++;
            cocktailFirst = true;
            starting = true;

            if (swaps == 0) {
                finishedSorting();
                return;
            }
            swaps = 0;
        }
    }
}