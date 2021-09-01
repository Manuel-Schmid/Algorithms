const RESET = "\u001B[37m"; // WHITE
const BLACK = "\u001B[30m";
const RED = "\u001B[31m";
const GREEN = "\u001B[32m";
const YELLOW = "\u001B[33m";
const BLUE = "\u001B[34m";
const PURPLE = "\u001B[35m";
const CYAN = "\u001B[36m";

let fieldList = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

function changeFieldListSize(x, y) {
    let fList = []
    for (let i = 0; i <= y; i++) {
        fList.push([])
        for (let i = 0; i <= x; i++) {
            fList[fList.length-1].push(0)
        }
    }
    fieldList = fList
}

changeFieldListSize(9,12)
routeTracking({x: 0, y: 1}, {x: 4, y: 11})
printGrid()

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
    highlight(A)
    highlight(B)
}

function highlight(P) {
    let row = fieldList[P.x][P.y] = "1"
}

function printGrid() {
    for(let i = 0; i < fieldList.length; i++) {
        let row = fieldList[i];
        let rowNums = CYAN
        for(let j = 0; j < row.length; j++) {
            if (fieldList[i][j] === 0) {
                rowNums += j.toString().padStart(2, '0')
                    + "|"
                    + (i).toString().padStart(2, '0')
                    + ", "
            }
            else rowNums += RED + "X-X-X, " + CYAN
        }
        console.log(rowNums)
    }
}

function getCenterPoint(A,B) {
    return {x: Math.round((A.x + B.x)/2), y: Math.round((A.y + B.y)/2)}
}
