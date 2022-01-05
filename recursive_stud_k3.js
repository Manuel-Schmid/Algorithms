// console.log(insertionSort([2,4,5,4,3,6,4,33,7,9,876,54,7,654,3]))

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

// console.log(recursiveSort([2,4,5,4,3,6,4,33,7,9,876,54,7,654,3]))

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

// console.log(getPrimesInRange(100))

function getPrimesInRange(range) {
    let primes = []
    for (let i = 0; i <= range; i++) {
        if (isPrime(i)) primes.push(i)
    }
    return primes
}

function isPrime(num) {
    let divisors = 0
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) divisors++
        if (divisors > 2) return false
    }
    return divisors === 2
}

// console.log(isPalindrome2('Tenet'))
// console.log(isPalindrome2('Ben'))
// console.log(isPalindrome2('Mr Owl ate my metal worm'))

function isPalindrome(word) {
    return word.toLowerCase().replace(/\s/g, '').split('').join('') === word.toLowerCase().replace(/\s/g, '').split('').reverse().join('')
}

function isPalindrome2(word) {
    word = word.replace(/\s/g, '').toLowerCase()
    for (let i = 0; i < word.length/2; i++) if (word.charAt(i) !== word.charAt(word.length-1-i)) return false
    return true
}

// ggT(21, 14)

function ggT(a, b) {
    if (a === b) console.log(a)
    else if (a > b) ggT(a-b, b)
    else if (b > a) ggT(a, b-a)
}

// console.log(linearSearch([3,5,4,45,6,86,54,67], 45))
function linearSearch(values, key) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] === key) return i
    }
    return -1
}

const randomNumsArray = (Array.from({length: 100000}, () => Math.floor(Math.random() * 100000))).sort();
// const randomNumsArray1 = [4,6,12,51,74,83,107,284,375,647];
// console.log(randomNumsArray)

let start = Date.now()
// console.log(linearSearch(randomNumsArray, 10003))
// console.log('Linear Search Runtime: ' + (Date.now() - start) + 'ms');

start = Date.now()
// console.log(binarySearch(randomNumsArray, 10003))
// console.log('Binary Search - Runtime: ' + (Date.now() - start) + 'ms');

function binarySearch(values, key) {
    let left = 0
    let right = values.length-1
    while (left <= right) {
        let center = Math.round((left + right)/2)
        if (values[center] === key) return center
        else {
            if (values[center] > key) right = center - 1
            else left = center + 1
        }
    }
    return -1
}
// console.log(getPrimefactors(24))
function getPrimefactors(n) {
    let primefactors = []
    let res = 1;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            while (res * i <= n) {
                res *= i
                primefactors.push(i)
                console.log(i + ":" +res)
            }
            if (res === n) return primefactors
        }
    }
}

console.log(bubbleSort([21,43,45,62,54,23,45,794,872,67,8,17,23]))

function bubbleSort(nums) {
    let array = nums
    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array.length-i-1; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                nums = array;
            }
        }
    }
    return array
}

