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

CollatzConjecture(100, 100)

function CollatzConjecture(n, counter) {
    if (counter <= 0) return
    else counter--
    let num
    isEven(n) ? num = n / 2 : num = n * 3 + 1
    console.log(num)
    CollatzConjecture(num, counter)
}

function isEven(num) {
    return num % 2 === 0
}
