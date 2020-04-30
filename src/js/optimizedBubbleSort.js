function optimizedBubbleSort() {
    if(array[j] > array[j+1]) {
        swap(j, j+1);
    }

    j++;
    if(j >= n - i - 1) {
        j = 0;
        i++;
        if(swaps == 0) {
            j = undefined;
            noLoop();
        }
        swaps = 0;
    }

    if(i >= n) {
        j = undefined;
        sorted = true;
        noLoop();
    }
    
    activePositions = [j];
    visualizeArray();    
}