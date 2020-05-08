# Sorting Visualizer
A web-application to visualize the various sorting algorithms made using vanilla JS (no libraries).
> Published at [Sorting Visualizer](https://shreeviknesh.github.io/SortingVisualizer/)
#### Features:
- Control the Array Size
- Control the Sorting Speed
- Play/Pause the algorithm

Contents
----
|Sorting Algorithm|Implemented?|
|:-:|:-:|
|[Bubble Sort](#bubble-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Optimized Bubble Sort](#optimized-bubble-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Selection Sort](#selection-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Insertion Sort](#insertion-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|[Binary Insertion Sort](#binary-insertion-sort)|<img src="https://img.shields.io/badge/-No-FF4136">|
|[Quick Sort](#quick-sort)|<img src="https://img.shields.io/badge/-Yes-2ECC40">|
|Merge Sort|<img src="https://img.shields.io/badge/-No-FF4136">|
|Heap Sort|<img src="https://img.shields.io/badge/-No-FF4136">|
|Counting Sort|<img src="https://img.shields.io/badge/-No-FF4136">|
|Radix Sort|<img src="https://img.shields.io/badge/-No-FF4136">|

Bubble Sort
----
- Bubble sort is the simplest (and slowest) sorting algorithm.
- It goes through the whole array and swaps adjacent elements if they're in the wrong order. 
- The worst-case time complexity is O(n<sup>2</sup>) even if the array is sorted.
#### Optimized Bubble Sort:
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
- It is used when the number of elements in the array is small, or when the input array is almost sorted.
#### Binary Insertion Sort:
- The algorithm can be optimized by using binary search to reduce the number of comparisons.
- This the comparisons in n<sup>th</sup> iteration from O(n<sup>2</sup>) to O(log n).

Quick Sort
----
- Quick sort is a Divide and Conquer algorithm that picks an element as pivot and partitions the array around the pivot.
- The key process of the algorithm is the `partition()` function. The goal of the partition function, given the array and a pivot element p, place p in the right position in the array with elements < p before p and elements > p after p. This must be done in linear time.
- The time complexity of the the quick sort algorithm greatly depends on the `partition()` function and picking the pivot value.
- The average-case and best-case time complexity of quick sort is O(log n). 
- The worst-case time complexity of quick sort is O(n<sup>2</sup>).
#### Pivot selection strategies:
1. First element as pivot
2. Last element as pivot
3. Median element as pivot
4. Random element as pivot (Implemented)
