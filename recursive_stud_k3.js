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

console.log(isPalindrome2('Tenet'))
console.log(isPalindrome2('Ben'))
console.log(isPalindrome2('Mr Owl ate my metal worm'))

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

