function selectionSort() {
    if(!looping || sorted) {
        return;
    }
    
    if(valueArray[j] < valueArray[pos]) {
        pos = j;
    }

    j++;

    if(j >= n) {
        swap(i, pos);
        sortedPositions.push(i);
        i++;
        pos = i;
        j = i;
    }

    if(i >= n - 1) {
        finishedSorting();
        return;
    }
        
    activePositions = [pos];
    visualizeArray();
}