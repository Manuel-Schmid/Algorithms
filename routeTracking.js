const RESET = "\u001B[37m"; // WHITE
const BLACK = "\u001B[30m";
const RED = "\u001B[31m";
const GREEN = "\u001B[32m";
const YELLOW = "\u001B[33m";
const BLUE = "\u001B[34m";
const PURPLE = "\u001B[35m";
const CYAN = "\u001B[36m";

let fieldList = []

function createFieldList(x, y) {
    let fList = []
    for (let i = 0; i <= y; i++) {
        fList.push([])
        for (let i = 0; i <= x; i++) {
            fList[fList.length-1].push(0)
        }
    }
    fieldList = fList
}

// -- ULTIMATE SETTINGS-MENU -- //
initiateTracking(
    16, // length (x-axis)
    20, // width (y-axis)
    {x: 1, y: 2}, // Point A coordinates
    {x: 15, y: 16} // Point B coordinates
)

function initiateTracking(x, y, A, B) {
    createFieldList(x,y)
    routeTracking(A, B)
    logPoints(A, B, true)
    printGrid()
}

function routeTracking(A, B) {
    if (A.x === B.x && A.y === B.y) { highlight(A); return }
    else if (A.x-1 === B.x && A.y-1 === B.y) { logPoints(A,B); return }
    else if (A.x-1 === B.x && A.y === B.y) { logPoints(A,B); return }
    else if (A.x-1 === B.x && A.y+1 === B.y) { logPoints(A,B); return }
    else if (A.x === B.x && A.y-1 === B.y) { logPoints(A,B); return }
    else if (A.x === B.x && A.y+1 === B.y) { logPoints(A,B); return }
    else if (A.x+1 === B.x && A.y-1 === B.y) { logPoints(A,B); return }
    else if (A.x+1 === B.x && A.y === B.y) { logPoints(A,B); return }
    else if (A.x+1 === B.x && A.y+1 === B.y) { logPoints(A,B); return }
    const C = getCenterPoint(A, B)
    routeTracking(A, C)
    routeTracking(C, B)
}

function logPoints(A, B, isOriginal=false) {
    highlight(A, isOriginal)
    highlight(B, isOriginal)
}

function highlight(P, isOriginal) {
    if (isOriginal) fieldList[P.y][P.x] = 2 // mark isOriginal points
    else fieldList[P.y][P.x] = 1 // mark waypoints
}

function printGrid() {
    for(let i = 0; i < fieldList.length; i++) {
        let row = fieldList[i];
        let rowNums = CYAN
        for(let j = 0; j < row.length; j++) {
            if (fieldList[i][j] === 2) rowNums += YELLOW
            else if ((fieldList[i][j] === 1)) rowNums += RED
            rowNums += j.toString().padStart(2, '0')
                + "|"
                + (i).toString().padStart(2, '0')
                + ", "
            if (fieldList[i][j] !== 0) rowNums += CYAN
        }
        console.log(rowNums)
    }
}

function getCenterPoint(A,B) {
    return {x: Math.round((A.x + B.x)/2), y: Math.round((A.y + B.y)/2)}
}
