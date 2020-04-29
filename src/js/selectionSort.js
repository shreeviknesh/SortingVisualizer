function selectionSort() {
        if(array[j] < array[pos]) {
        pos = j;
    }

    j++;

    if(j >= n) {
        swap(i, pos);
        i++;
        pos = i;
        j = i;
    }

    if(i >= n - 1) {
        pos = undefined;
        noLoop();
    }
        
    activePositions = [pos];
    visualizeArray();
}