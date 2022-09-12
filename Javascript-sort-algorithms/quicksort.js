/**
 * @param1 Select an element of the array. This element is generally called the pivot.
 * Most often this element is either the first or the last element in the array.
 * 
 * @param2 Then, rearrange the elements of the array so that all the elements to the left of the pivot are
 * smaller than the pivot and all the elements to the right are greater than the pivot. The step is called 
 * partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
 * 
 * @param3 Repeat this process individually for the left and right side of the pivot, until the array is sorted.
 */

 function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

let array1 = [ 234, 43, 55, 63, 5, 6, 235, 547 ];
quickSortRecursive(array1, 0, array1.length - 1);
console.log(array1);

let array2 = [ 1, 4, 2, 5, -2, 3 ];
quickSortRecursive(array2, 0, array2.length - 1);
console.log(array2);

let array3 = [ 52, 37, 63, 14, 17, 8, 6, 25 ];
quickSortRecursive(array3, 0, array3.length - 1);
console.log(array3);