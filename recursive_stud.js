// an = k • an-1 • (1 - an-1)

// f(2, 100)

function f(k, limit) {
    let a = 0.2
    for (let n = 0; n < limit; n++) {
        a = k * a * (1-a)
        console.log(n + ": " + a)
    }
}

// fibonacci(100)

function fibonacci(limit) {
    let last = 0
    let cur = 1
    for (let n = 0; n < limit; n++) {
        console.log((n + 1) + ": " + cur)
        let newNr = last + cur
        last = cur
        cur = newNr
    }
}

fib(99)

// fibonacci sequence (again)
function fib(limit) {
    let fibseq = []
    fibseq[0] = fibseq[1] = 1

    for (let n = 2; n <= limit; n++) {
        fibseq[n] = fibseq[n-1] + fibseq[n-2]
    }
    console.log(fibseq)
}

//
// for (let n = 1; n <= 20; n++) {
//     console.log(n + ": " + hof(n))
// }

function hof(n) {
    if (n === 1 || n === 2) return 1
    return hof(n - hof(n-1)) + hof(n - hof(n-2))
}


