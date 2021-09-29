console.log(insertionSort([2,4,5,4,3,6,4,33,7,9,876,54,7,654,3]))

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let temp = array[i]
        let j = i-1
        while(j >= 0 && array[j] > temp) {
            array[j+1] = array[j]
            j--
        }
        array[j+1] = temp
    }
    return array
}

console.log(recursiveSort([2,4,5,4,3,6,4,33,7,9,876,54,7,654,3]))

function recursiveSort(arr) {
    if (arr.length <= 1) return arr
    const half = arr.length / 2;
    const left = arr.splice(0, half);
    return merge(recursiveSort(left), recursiveSort(arr)); // arr = right
}

function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        // insert the smallest element to the sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}