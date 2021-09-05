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

console.log(likes([]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

function likes(people) {
    if (people.length <= 0) return "no one likes this"
    else if (people.length === 1) return people[0] + " likes this"
    else if (people.length === 2) return people[0] + " and " + people[1] + " like this"
    else if (people.length === 3) return people[0] + ", " + people[1] + " and " + people[2] + " like this"
    else if (people.length >= 4) return people[0] + ", " + people[1] + " and " + (people.length-2) + " others like this"
}