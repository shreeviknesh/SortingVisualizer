function bubbleSort() {
        if(array[j] > array[j+1]) {
        swap(j, j+1);
    }

    j++;
    if(j >= n - i - 1) {
        j = 0;
        i++;
    }

    if(i >= n) {
        j = undefined;
        noLoop();
    }

    activePositions = [j];
    visualizeArray();
}