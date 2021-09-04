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
console.log(nb_year(1000, 2, 50, 1200))
console.log(nb_year(1500, 5, 100, 5000))
console.log(nb_year(1500000, 2.5, 10000, 2000000))

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