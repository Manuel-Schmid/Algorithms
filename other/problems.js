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

// console.log(DNAStrand ("ATTGC")) // return "TAACG"
// console.log(DNAStrand ("GTAT")) // return "CATA"
function DNAStrand(dna){
    return dna.split('').map(l => {
        if (l === 'A') return 'T'
        else if (l === 'T') return 'A'
        else if (l === 'G') return 'C'
        else if (l === 'C') return 'G'
    }).join('')
}

/* ***************************************************************************************** */
/*
* Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the
* integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return
* the string '(integer) is prime'.
* */

// console.log(divisors(12)); // should return [2,3,4,6]
// console.log(divisors(25)); // should return [5]
// console.log(divisors(13)); // should return "13 is prime"

function divisors(n) {
    let divisors = []
    for (let i = 2; i < n; i++) {
        if (n % i === 0) divisors.push(i)
    }
    if (divisors.length === 0) return n + ' is prime'
    return divisors
}

/* ***************************************************************************************** */
/*
* Your task is to sort a given string. Each word in the string will contain a single number. This number is
* the position the word should have in the result.
*
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid
* consecutive numbers.
* */

// console.log(order("is2 Thi1s T4est 3a")) // -->  "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order("")) // -->  ""
function order(words) {
    if(words === '') return ''
    let sentence = []
    words = words.split(' ')
    for (let i = 1; i <= words.length; i++) {
        for (let word of words) {
            if(word.indexOf(i.toString()) > -1) sentence.push(word)
        }
    }
    return sentence.join(' ')
}


/* *****************************************************************************************
* Implement the function unique_in_order which takes as argument a sequence and returns a list
* of items without any elements with the same value next to each other and preserving the original
* order of elements.
*
* remember: sequence can be a string or an array
* */

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) // == ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD'))         // == ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3]))       // == [1,2,3]

function uniqueInOrder(sequence) {
    if (sequence.length === 0) return []
    if(!Array.isArray(sequence)) sequence = sequence.split('')
    let result = []
    result.push(sequence[0])
    for (let i = 1; i < sequence.length; i++) {
        if (result[result.length-1] !== sequence[i]) result.push(sequence[i])
    }
    return result
}


/* *****************************************************************************************
*A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
- Float parameter "h" in meters must be greater than 0
- Float parameter "bounce" must be greater than 0 and less than 1
- Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
* */

// console.log(bouncingBall(3, 0.66, 1.5)) // 3
// console.log(bouncingBall(3, 1, 1.5)) // -1
// console.log(bouncingBall(30.0, 0.66, 1.5)) // 15

function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let rebounds = -1
    while (h > window) {
        rebounds += 2
        h *= bounce
    }
    return rebounds
}



/* *****************************************************************************************
* Build Tower
  Build Tower by the following given argument:
  number of floors (integer and always greater than 0).

  Tower block is represented as *
* */

// console.log(towerBuilder(3))
/*
  '  *  ',
  ' *** ',
  '*****'
* */
// console.log(towerBuilder(6))
/*
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********' // (2 * nFloors) - 1
* */
// console.log(towerBuilder(10))

function towerBuilder(nFloors) {
    let tower = []
    for (let i = 1; i <= nFloors; i++) {
        const blocks = '*'.repeat((2 * i) - 1)
        const space = ' '.repeat((((2 * nFloors) - 1) - blocks.length) / 2)
        tower.push(space + blocks + space)
    }
    return tower
}

/* *****************************************************************************************
* Your goal in this kata is to implement a difference function, which subtracts one list from
* another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
* */

// console.log(arrayDiff([1,2],[1])) // == [2]
// console.log(arrayDiff([1,2,2,2,3],[2])) // == [1,3]

function arrayDiff(a, b) {
    let res = []
    for (let item of a) {
        if (b.indexOf(item) <= -1) res.push(item)
    }
    return res
}

/* *****************************************************************************************
*The main idea is to count all the occurring characters in a string.
* If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
* If the string is empty the result should be empty object literal, {}.
* */

// console.log(countChars('aba'))
// console.log(countChars('banana'))

function countChars(str) {
    let obj = {}
    str.split('').forEach(s => {
        obj[s] = (obj[s] || 0) + 1
    })
    return obj
}


/* *****************************************************************************************
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given
numbers differs from the others. Bob observed that one number usually differs from the others in evenness.
Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different
in evenness, and return a position of this number.

Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements
start from 1 (not 0)
* */

// console.log(iqTest("2 4 7 8 10")) // => 3 // Third number is odd, while the rest of the numbers are even
// console.log(iqTest("1 2 1 1")) // => 2 // Second number is even, while the rest of the numbers are odd
// console.log(iqTest("1 2 5 4")) // => 0 // There was no irregular number.

function iqTest(numbers) {
    let allEvenNumbers = numbers.split(' ').filter(num => num % 2 === 0)
    if (allEvenNumbers.length === 1) { // if only one even number
        return numbers.split(' ').join(',') + " => " + (numbers.split(' ').indexOf(allEvenNumbers.toString()) + 1) + '. number is even, while the rest of the numbers are odd'
    } else if (allEvenNumbers.length === numbers.split(' ').length-1) { // if only one odd number
        let oddNumber = numbers.split(' ').filter(num => num % 2 !== 0)
        return numbers.split(' ').join(',') + " => " + (numbers.split(' ').indexOf(oddNumber.toString()) + 1) + '. number is odd, while the rest of the numbers are even'
    } else return 'There was no irregular number.'
}

/* *****************************************************************************************
* Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
* Any whitespace at the end of the line should also be stripped out.
*
* Example:
*
* Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

* The output expected would be:
apples, pears
grapes
bananas
* */

// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
// result ==> "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    let lines = input.split('\n').map(e => {
        const lineArr = e.split('')
        const indexStop = input.length
        for (let marker of markers) {
            const markerIndex = lineArr.indexOf(marker)
            if(markerIndex > -1 && markerIndex < indexStop) return lineArr.slice(0,markerIndex).join('').trim()
        }
        return e.trim()
    })
    return lines.join('\n')
}
// better solution:
/*
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}
* */

/* *****************************************************************************************
* Create a function that takes a positive integer and returns the next bigger number that
* can be formed by rearranging its digits.
* If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
* */
// console.log(nextBigger(12))   // returns 21
// console.log(nextBigger(513))  // returns 531
// console.log(nextBigger(2017)) // returns 2071
// console.log(nextBigger( 9))   // returns -1
// console.log(nextBigger( 111)) // returns -1
// console.log(nextBigger( 531)) // returns -1

function nextBigger(num) {
    const allPossibleMutations = getArrayMutations(num.toString().split('').map(e => parseInt(e)))
    let n = -1
    for (let mutation of allPossibleMutations) {
        const mNum = parseInt(mutation.join(''))
        if ((mNum > num) && (n === -1 || mNum < n)) n = mNum
    }
    return n
}

// console.log(getArrayMutations([2,1,3,4]))

function getArrayMutations(arr, perms = [], len = arr.length) {
    if (len === 1) perms.push(arr.slice(0))

    for (let i = 0; i < len; i++) {
        getArrayMutations(arr, perms, len - 1)

        len % 2 // parity dependent adjacent elements swap
            ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
            : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
    }

    return perms
}


// console.log(arrayRotate([1, 2, 3, 4, 5], 2))    // [2, 3, 4, 5, 1];
// console.log(arrayRotate([1, 2, 3, 4, 5], 2,true))   // [5, 1, 2, 3, 4];

function arrayRotate(arr, limit, toTheRight=false) {
    for (let i = 0; i < limit; i++) {
        if (toTheRight) arr.unshift(arr.pop());
        else arr.push(arr.shift());
    }
    return arr;
}


/* *****************************************************************************************
* create a function that checks, if a two words are anagrams
* */

// console.log(areAnagrams('Anna', 'Anam')) // false
// console.log(areAnagrams('Aurevoir', 'reviorau')) // true
// console.log(areAnagrams('crazer', 'zakrer')) // false

function areAnagrams(word1, word2) {
    return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')
}

/* *****************************************************************************************
* Extract the Domain name: Write a function that when given a URL as a string, parses out
* just the domain name and returns it as a string.
* */
// console.log(domainName("http://github.com/carbonfive/raygun")) // == "github"
// console.log(domainName("http://www.zombie-bites.com")) // == "zombie-bites"
// console.log(domainName("https://www.cnet.com")) // == "cnet"
// console.log(domainName("http://google.co.jp")) // == "google");)
// console.log(domainName("www.xakep.ru")) // == "xakep")

function domainName(url) {
    url = url.replace('https://', '')
    url = url.replace('http://', '')
    url = url.replace('www.', '')
    return url.split('.')[0]
}

/* *****************************************************************************************
* In this example you have to validate if a user input string is alphanumeric.
* The given string is not nil/null/NULL/None, so you don't have to check that.
*
* The string has the following conditions to be alphanumeric:
    - At least one character ("" is not valid)
    - Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    - No whitespaces / underscore
* */
// console.log(isAlphanumeric('Mazinkaiser')) // true
// console.log(isAlphanumeric('hello world_')) // false
// console.log(isAlphanumeric('PassW0rd')) // true
// console.log(isAlphanumeric('Plus+word')) // false
// console.log(isAlphanumeric('     ')) // false

function isAlphanumeric(str) {
    return !!str.match(/^[0-9a-zA-Z]+$/); // !! casts the result to a boolean value
}


/* *****************************************************************************************
* Valid parantheses
* Write a function that takes a string of parentheses, and determines if the order of the parentheses
* is valid. The function should return true if the string is valid, and false if it's invalid.
* */

// console.log(validParentheses("()")) // =>  true
// console.log(validParentheses(")(()))")) // =>  false
// console.log(validParentheses("("))// =>  false
// console.log(validParentheses("(())((()())())")) // =>  true

function validParentheses(parens){
    let index = 0
    while (index > -1) {
        parens = parens.replace('()', '')
        index = parens.indexOf('()')
    }
    return parens === ''
}

/* *****************************************************************************************
* Factorial algorithm (iterative)
* */
const factorial = number => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
        product *= i;
    }
    return product;
};
console.log(factorial(6))


/* *****************************************************************************************
*
*
* */

/* *****************************************************************************************
*
*
* */