function bubbleSort() {
    for(let x = 0; x < frameRate; x++) {
        if(array[j] > array[j+1]) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
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
    }

    for(let iter = 0; iter < n; iter++) {
        if(iter != j) {
            fill(valueColor);
        } 
        else {
            fill(activeColor);
        }
        strokeWeight(1);
        rect(iter * scale, height, 1 * scale, -array[iter]);
    }
}