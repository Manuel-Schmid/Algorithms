// palindrome checker (Otto, Anna usw.)

console.log(isPalindrome('TENET'))

function isPalindrome(word) {
    word = word.replace(/\s/g, "").toLowerCase()

    const middle = Math.ceil(word.length / 2);
    let f = word.slice(0, middle);
    let s = word.slice(middle);
    if (f.length > s.length) f = f.slice(0, f.length-1)

    s = s.split("").reverse().join("")

    return f === s
}