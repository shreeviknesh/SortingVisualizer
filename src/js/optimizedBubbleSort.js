function optimizedBubbleSort() {
    if(!looping || sorted) {
        return;
    }
    
    if(valueArray[j] > valueArray[j+1]) {
        swap(j, j+1);
    }

    j++;
    if(j >= n - i - 1) {
        j = 0;
        sortedPositions.push(n-i-1);
        i++;
        if(swaps == 0) {
            finishedSorting();
            return;
        }
        swaps = 0;
    }

    if(i >= n) {
        finishedSorting();
        return;
    }
    
    activePositions = [j];
    visualizeArray();    
}