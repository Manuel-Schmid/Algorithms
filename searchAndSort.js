
// console.log([22,35,3,12,4,66,34,53,62,41,69,30], 12)

function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) return i
    }
    return -1
}

// console.log(binarySearch([11,12,15,19,23,45,54,91,100], 45))

function binarySearch(values, key) {
    let left = 0
    let right = values.length-1
    while (left <= right) {
        let center = Math.floor((left + right)/2)
        if (values[center] === key) return center
        else {
            if (values[center] > key) right = center - 1
            else left = center + 1
        }
    }
    return -1
}

// console.log(bubbleSort([21,43,45,62,54,23,57,794,872,67,8,17,23]))

function bubbleSort(array) {
    for(let i = 0; i < array.length-1; i++) {
        let c = 0
        for(let j = 0; j < array.length-i-1; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                c++
            }
        }
        if (c === 0) return array;
    }
    return array
}

// console.log(max([21,43,45,62,54,23,57,794,872,67,8,17,23]))

function max(array) {
    for(let j = 0; j < array.length-1; j++) {
        if(array[j] > array[j+1]) {
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
    return array[array.length-1]
}

// console.log(max1([21,43,45,62,54,23,57,794,872,67,8,17,23]))
function max1(arr) {
    let biggest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) biggest = arr[i]
    }
    return biggest
}

// console.log(selectionSort([21,43,45,62,54,23,57,794,872,67,8,17,23]))
function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let baddest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[baddest]) baddest = j
        }
        // swap
        let temp = arr[i]
        arr[i] = arr[baddest]
        arr[baddest] = temp
    }
    return arr
}

// let arr = [212,43,45,107,62,54,23,57,794,321,73,872,67,8,17,23]
let arr = Array.from({length: 1000000}, () => Math.floor(Math.random() * 1000000));


const start = Date.now();
quickSort(0, arr.length-1)
console.log(arr)
console.log("Duration: " + (Date.now() - start) + " ms")

function quickSort(left, right) {
    if (left >= right) return
    let i = left
    let j = right
    let mid = Math.floor(((left+right)/2))
    let pivot = arr[mid]
    while(i <= j) {
        while (i<right && arr[i]<pivot) i++
        while (j>left && pivot<arr[j]) j--
        if (i<=j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    if (left < j) quickSort(left, j)
    if (i < right) quickSort(i, right)
}



