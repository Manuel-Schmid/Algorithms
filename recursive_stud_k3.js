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
