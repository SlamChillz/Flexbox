/**
 * @param1 Starting from the beginning of the collection we want to be sorted - we compare elements within a pair.
 * @param2 If the pair is in the desired order, we do nothing. If it isn't, we swap the elements it consists of.
 * @param3 This is done again, and again, until all elements in the collection are sorted.
 */

 function bubbleSort(inputArr) {
    let n = inputArr.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            // Comparing and swapping the elements
            if(inputArr[j] > inputArr[j+1]){
                let t = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = t;
            }
        }
    }
    return inputArr;
}

let array1 = [ 234, 43, 55, 63, 5, 6, 235, 547 ];
bubbleSort(array1);
console.log(array1);

let array2 = [ 1, 4, 2, 5, -2, 3 ];
bubbleSort(array2);
console.log(array2);

let array3 = [ 52, 37, 63, 14, 17, 8, 6, 25 ];
bubbleSort(array3);
console.log(array3);