let a = 4;
let b = 6;
const c = 'parties';
const d = true;

function testNum(a, b) {
    if (a === b) {
        result = 'they match';
    }
    else {
        result = 'no luck';
    }
    return result;
}

function stringChar() {
    for (const value of c) {
        console.log(value);
    }
}

console.log(testNum(a, b));
console.log(testNum(a, 4));
stringChar();
