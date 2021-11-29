// Snowball-effect (telephone)

let n = 1;
const callList = [ // 84
    "Erica","Harry",
    "Bruce","Cook",
    "Carolyn","Levi",
    "Albert","Walker",
    "Randy","Reed",
    "Larry","Barnes",
    "Eren","Wilson",
    "Jesse","Campbell",
    "Willam","Dafoe",
    "Theresa","Patterson",
    "Henry","Simmons",
    "Michelle","Perry",
    "Frank","Butler",
    "Shirley", "Ross",
    "Brooks", "Ruth",
    "Rachel","Edwards",
    "Christopher","Perez",
    "Thomas","Baker",
    "Sara","Moore",
    "Christa","Bailey",
    "Yelena","Johnson",
    "Marilyn","Thompson",
    "Anthony","Evans",
    "Julie","Hall",
    "Paula","Phillips",
    "Annie","Hernandez",
    "Dorothy","Murphy",
    "Alice","Howard",
    "Jackson", "Reiner",
    "Debra","Allen",
    "Gerald","Harris",
    "Raymond","Carter",
    "Jacqueline","Torres",
    "Joseph","Nelson",
    "Carlos","Sanchez",
    "Ralph","Clark",
    "Jean","Alexander",
    "Stephen","Roberts",
    "Eric","Long",
    "Amanda","Scott",
    "Teresa","Diaz",
    "Wanda","Thomas"
]

// call(callList)

function call(list) {
    console.log(n++ + " - " + list[0] + ' got a call.')
    if (list.length === 1) return

    list.splice(0, 1)
    const half = Math.ceil(list.length / 2);
    const firstHalf = list.splice(0, half);
    const secondHalf = list.splice(-half);
    call(firstHalf)
    if (secondHalf.length > 0) call(secondHalf)
}

// ggT(21, 14)

function ggT(a, b) {
    if (a === b) console.log(a)
    else if (a > b) ggT(a-b, b)
    else if (b > a) ggT(a, b-a)
}

// pascalTriangle(20)

function pascalTriangle(rows) { // non-recursive approach
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
        let nums = row.join(' ')
        // let spaces = ' '.repeat((pTriangle[pTriangle.length-1].join(' ').length - nums.length)/2 || 0)
        console.log(nums)
    }
}

// console.log(pascalTriangleRec(4,2))

function pascalTriangleRec(zeile,spalte) {
    if (zeile === 0 && spalte === 0 || spalte === 0 || spalte === zeile) return 1
    return pascalTriangleRec(zeile - 1, spalte - 1) + pascalTriangleRec(zeile - 1, spalte)
}
