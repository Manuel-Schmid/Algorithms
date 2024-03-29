// palindrome checker (Otto, Anna usw.)

// console.log(isPalindrome('TENET'))

function isPalindrome(word) {
    word = word.replace(/\s/g, "").toLowerCase()

    const middle = Math.ceil(word.length / 2);
    let f = word.slice(0, middle);
    let s = word.slice(middle);
    if (f.length > s.length) f = f.slice(0, f.length-1)

    s = s.split("").reverse().join("")

    return f === s
}

// CollatzConjecture(41, 72)

function CollatzConjecture(n, repeats) {
    if (repeats <= 0) return
    else repeats--
    let num
    isEven(n) ? num = n / 2 : num = n * 3 + 1
    console.log(num)
    CollatzConjecture(num, repeats)
}

function isEven(num) {
    return num % 2 === 0
}

console.log(getAllPrimesInRange(100))

function isPrimeNumber(num) {
    if (num <= 1 || (num % 2 === 0 && num > 2)) {
        return false;
    }
    let s = Math.sqrt(num);
    for(let i = 3; i <= s; i++){
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function getAllPrimesInRange(limit) {
    let result = [];
    for (let num = 0; num <= limit; num++) {
        if (isPrimeNumber(num)) {
            result.push(num);
        }
    }
    return result;
}