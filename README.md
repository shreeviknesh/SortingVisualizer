# Sorting Visualizer
A webpage to visualize the various sorting algorithms made using [p5.js](https://p5js.org/) library.

> The website is publised at [Sorting Visualizer](https://shreeviknesh.github.io/SortingVisualizer/)

Bubble Sort
----
- Bubble sort is the simplest (and slowest) sorting algorithm.
- It goes through the whole array and swaps adjacent elements if they're in the wrong order. 
- The worst-case time complexity is O(n<sup>2</sup>) even if the array is sorted.
- Optimization:
  - The algorithm can be optimized to stop if the inner loop does not cause any swaps, i.e., the array is sorted.
  - This leads to the best-case time complexity of O(n) and average-case time complexity of O(n<sup>2</sup>).
  
Selection Sort
----
- Selection sort splits the array into two: sorted partition and unsorted partition.
- It goes through the unsorted part, finds the minimum element and swaps it with the first element of the unsorted part.
- During each iteration, it finds the minimum element in the unsorted part and puts it to the sorted part.
- The worst-case time complexity is O(n<sup>2</sup>).
- The advantage of selection sort over bubble sort is that it never makes more than O(n) swaps. This can come in handy when memory write is costly.

Insertion Sort
----
- Insertion sort is a simple sorting algorithm that works the way we sort playing cards.
- For each element from i from 1..n, it inserts it in the sorted array j from 0..i-1
- The worst-case and average-case time complexity is O(n<sup>2</sup>).
- The best-case time complexity is O(n) when the elements are in sorted order.

TODO
----
~1. Insertion Sort~
3. Quick Sort
2. Merge Sort
4. Heap Sort
