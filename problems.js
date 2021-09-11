/*
* Write a function that takes in a string of one or more words, and returns
* the same string, but with all five or more letter words reversed.

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
* */

// console.log(spinWords("Hello I am Manuel"))

function spinWords(string) {
    let words = string.split(' ')
    words = words.map((word) => {
        return (word.length >= 5) ? word.split('').reverse().join('') : word
    })
    return words.join(' ')
}

/* ***************************************************************************************** */

/*
* In a small town the population is p0 = 1000 at the beginning of a year. 
* The population regularly increases by 2 percent per year and 
* moreover 50 new inhabitants per year come to live in the town. 
* How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*
* p0 : start population
* percent : yearly population increase in %
* aug : (inhabitants coming or leaving each year)
* p : (population to surpass)
 */

// console.log(nb_year(1000, 2, 50, 1200))
// console.log(nb_year(1500, 5, 100, 5000))
// console.log(nb_year(1500000, 2.5, 10000, 2000000))

function nb_year(p0, percent, aug, p) {
    let curP = p0;
    let years = 0;
    while (curP < p) {
        curP = Math.floor(curP + (curP*(percent/100)) + aug)
        years++;
        // console.log(years + ": " + curP)
    }
    return years;
}

/*
* Simple, given a string of words, return the length of the shortest word(s).
* String will never be empty and you do not need to account for different data types.
* */

// console.log(shortestWord('why does thine kin ceaselessly assume the worst possible outcome'))

function shortestWord(wordsString) {
    const words = wordsString.split(' ')
    let shortestLength = wordsString.length
    for (let word of words) {
        if (word.length < shortestLength) shortestLength = word.length
    }
    return shortestLength
}

/* ***************************************************************************************** */


/*
* You probably know the "like" system from Facebook and other pages.
* People can "like" blog posts, pictures or other items. We want to create the
* text that should be displayed next to such an item.

Implement the function likes which takes an array containing the names of people
* that like an item. It must return the display text as shown in the examples:
*
*
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*
* For 4 or more names, the number in and 2 others simply increases.
* */
/*
console.log(likes([]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
*/
function likes(people) {
    if (people.length <= 0) return "no one likes this"
    else if (people.length === 1) return people[0] + " likes this"
    else if (people.length === 2) return people[0] + " and " + people[1] + " like this"
    else if (people.length === 3) return people[0] + ", " + people[1] + " and " + people[2] + " like this"
    else if (people.length >= 4) return people[0] + ", " + people[1] + " and " + (people.length-2) + " others like this"
}


/* ***************************************************************************************** */

/*
* A Narcissistic Number is a positive number which is the sum of its own digits,
* each raised to the power of the number of digits in a given base.
* In this Kata, we will restrict ourselves to decimal (base 10).

*  For example, take 153 (3 digits), which is narcisstic:
*  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*
*  and 1652 (4 digits), which isn't:
*  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
*
*
* The Challenge:

* Your code must return true or false depending upon whether
* the given number is a Narcissistic number in base 10.
* */

// console.log(isNarcissisticNumber(153))
// console.log(isNarcissisticNumber(1652))
// console.log(calcNarcissisticNumbersInRange(500))

function isNarcissisticNumber(number) {
    const digits = number.toString().length
    let result = 0;
    for (let i = 0; i < digits; i++) {
        result += Math.pow(parseInt(number.toString()[i]), digits)
    }
    return result === number
}

function calcNarcissisticNumbersInRange(range) {
    let narcissisticNumbers = []
    for (let i = 0; i <= range; i++) {
        if (isNarcissisticNumber(i)) narcissisticNumbers.push(i)
    }
    return narcissisticNumbers
}


/* ***************************************************************************************** */

/*
* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
* For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
* */

// console.log(concatenateSquaredDigits(9119))

function concatenateSquaredDigits(number) {
    let result = '';
    for (let i = 0; i < number.toString().length; i++) {
        result += Math.pow(parseInt(number.toString()[i]), 2)
    }
    return parseInt(result);
}

/* ***************************************************************************************** */

/*
* Function to parse a positive decimal integer it's equivalent in binary
* */

// console.log(decimalToOtherSystem(267, 2)) // decimal - binary
// console.log(decimalToOtherSystem(39, 2)) // decimal - binary
// console.log(decimalToOtherSystem(392, 13)) // decimal - 13er-system
// console.log(decimalToOtherSystem(1001, 16)) // decimal - hex
// console.log(decimalToOtherSystem(734, 16)) // decimal - hex

function decimalToOtherSystem(num, system) {
    let quotient = num
    let converted = []
    while (quotient > 0) {
        if (system !== 16) converted.push(quotient % system)
        else converted.push(((quotient % system).toString(16).toUpperCase()))
        quotient = Math.floor(quotient / system)
    }
    return converted.reverse().join('')
}


/* ***************************************************************************************** */
/*
* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
* */

// console.log(duplicateCount('abcde'))
// console.log(duplicateCount('aabbcde'))
// console.log(duplicateCount('aabBcde'))
// console.log(duplicateCount('indivisibility'))
// console.log(duplicateCount('Indivisibilities'))

function duplicateCount(text) {
    let arr = text.toLowerCase().split('')
    const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    return toFindDuplicates(arr).length
}


/* ***************************************************************************************** */

/*
* Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.
* */

// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)) // 3
// console.log(intDiff([1, 1, 3, 3], 2)) // 4
function intDiff(arr, n) {
    let intDiffsCount = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] === n || arr[i] - arr[j] === n) intDiffsCount++
        }
    }
    return intDiffsCount
}

/* ***************************************************************************************** */
/*
* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one
* side of the DNA (string); you need to get the other complementary side. DNA strand is
* never empty or there is no DNA at all.
*
* */

console.log(DNAStrand ("ATTGC")) // return "TAACG"
console.log(DNAStrand ("GTAT")) // return "CATA"
function DNAStrand(dna){
    return dna.split('').map(l => {
        if (l === 'A') return 'T'
        else if (l === 'T') return 'A'
        else if (l === 'G') return 'C'
        else if (l === 'C') return 'G'
    }).join('')
}