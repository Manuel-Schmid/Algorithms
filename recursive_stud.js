// an = k • an-1 • (1 - an-1)

// f(2, 100)

function f(k, limit) {
    let a = 0.2
    for (let n = 0; n < limit; n++) {
        a = k * a * (1-a)
        console.log(n + ": " + a)
    }
}

// fibonacci(50)

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

// fibs(50)

// fibonacci sequence (again)
function fibs(limit) {
    let fibseq = []
    fibseq[0] = fibseq[1] = 1

    for (let n = 2; n <= limit; n++) {
        fibseq[n] = fibseq[n-1] + fibseq[n-2]
    }
    console.log(fibseq)
}

// fibonacci but in recursive ^^
// for (let n = 0; n <= 60; n++) {
//     console.log(n + ": " + fib(n))
// }

function fib(n) {
    if (n === 0 || n === 1)  return 1
    return fib(n-1) + fib(n-2)
}

// for (let n = 1; n <= 20; n++) {
//     console.log(n + ": " + hof(n))
// }

function hof(n) {
    if (n === 1 || n === 2) return 1
    return hof(n - hof(n-1)) + hof(n - hof(n-2))
}


