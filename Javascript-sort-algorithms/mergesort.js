/**
 * @param1 Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
 * 
 * @param2 Continue dividing the subarrays in the same manner until you are left with only single element arrays.
 * 
 * @param3 Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
 * 
 * @param4 Repeat step 3 unit with end up with a single sorted array.
 */

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr,...left,...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array));
}

let array1 = [ 234, 43, 55, 63, 5, 6, 235, 547 ];
console.log(mergeSort(array1));

let array2 = [ 1, 4, 2, 5, -2, 3 ];
console.log(mergeSort(array2));

let array3 = [ 52, 37, 63, 14, 17, 8, 6, 25 ];
console.log(mergeSort(array3));