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

// pascalTriangle(6)

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
        console.log(row)
    }
}

console.log(pascalTriangleRec(10,5))

function pascalTriangleRec(i,j) {
    if (i === 0 && j === 0 || j === 0 || j === i) return 1
    return pascalTriangleRec(i - 1, j - 1) + pascalTriangleRec(i - 1, j)
}
