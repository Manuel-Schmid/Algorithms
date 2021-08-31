// Snowball-effect (telephone)

let n = 1;
const callList = [ // 28
    "Erica","Harry",
    "Bruce","Cook",
    "Carolyn","Morgan",
    "Albert","Walker",
    "Randy","Reed",
    "Larry","Barnes",
    "Lois","Wilson",
    "Jesse","Campbell",
    "Willam","Dafoe",
    "Theresa","Patterson",
    "Henry","Simmons",
    "Michelle","Perry",
    "Frank","Butler",
    "Shirley", "Ross"
]

call(callList)

function call(list) {
    console.log(n++ + ": " + list[0] + ' got a call !')
    if (list.length === 1) return
    list.splice(0, 1)

    const half = Math.ceil(list.length / 2);

    const firstHalf = list.splice(0, half);
    const secondHalf = list.splice(-half);
    call(firstHalf)
    if (secondHalf.length > 0) call(secondHalf)
}
