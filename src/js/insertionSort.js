function insertionSort() {
    if(!looping || sorted) {
        return;
    }

    if(j >= 0 && valueArray[j] > insertionSortVal) {
        valueArray[j + 1] = valueArray[j];
        j--;
    } 
    if(j < 0 || valueArray[j] <= insertionSortVal) {
        valueArray[j + 1] = insertionSortVal;
        i++;
        insertionSortVal = valueArray[i];
        j = i - 1;
    }

    if(i >= n) {
        finishedSorting();
        return;
    }

    activePositions = [j, i];
    visualizeArray();
}