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


// routeTracking({x: 1, y: 1}, {x: 5, y: 7})

function routeTracking(A, B) {
    if (A.x-1 === B.x && A.y-1 === B.y) { logPoints(A,B); return }
    if (A.x-1 === B.x && A.y === B.y) { logPoints(A,B); return }
    if (A.x-1 === B.x && A.y+1 === B.y) { logPoints(A,B); return }
    if (A.x === B.x && A.y-1 === B.y) { logPoints(A,B); return }
    if (A.x === B.x && A.y+1 === B.y) { logPoints(A,B); return }
    if (A.x+1 === B.x && A.y-1 === B.y) { logPoints(A,B); return }
    if (A.x+1 === B.x && A.y === B.y) { logPoints(A,B); return }
    if (A.x+1 === B.x && A.y+1 === B.y) { logPoints(A,B); return }
    const C = getCenterPoint(A, B)
    routeTracking(A, C)
    routeTracking(C, B)
}

function logPoints(A, B) {
    console.log("A: " + A.x + "|" + A.y + " B: " + B.x + "|" + B.y)
}
function getCenterPoint(A,B) {
    return {x: Math.round((A.x + B.x)/2), y: Math.round((A.y + B.y)/2)}
}


// ggT(21, 14)

function ggT(a, b) {
    if (a > b) ggT(a-b, b)
    else if (b > a) ggT(a, b-a)
    else if (a === b) console.log(a)
}
