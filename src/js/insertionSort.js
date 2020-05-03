function insertionSort() {
    if(!looping || sorted) {
        return;
    }

    if(j >= 0 && valueArray[j] > value) {
        valueArray[j + 1] = valueArray[j];
        j--;
    } 
    if(j < 0 || valueArray[j] <= value) {
        valueArray[j + 1] = value;
        i++;
        value = valueArray[i];
        j = i - 1;
    }

    if(i >= n) {
        finishedSorting();
        return;
    }

    activePositions = [j, i];
    visualizeArray();
}