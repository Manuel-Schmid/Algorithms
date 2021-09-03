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

// pascalTriangle(6)

function pascalTriangle(rows) {
    let pTriangle = new Array(rows)
    for (let i = 0; i < rows; i++) {
        let row = new Array(i + 1)
        row[0] = 1;
        row[row.length - 1] = 1;
        for (let j = 1; j < row.length - 1; j++) {
            let prevRow = pTriangle[i-1]
            row[j] = prevRow[j] + prevRow[j - 1];
        }
        pTriangle[i] = row;
    }
    for (let row of pTriangle) {
        console.log(row)
    }
}

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

