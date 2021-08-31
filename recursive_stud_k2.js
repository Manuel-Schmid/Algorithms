// Snowball-effect (telephone)

let n = 1;
const callList = [ // 28
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

call(callList)

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
