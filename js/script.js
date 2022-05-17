function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Антон'));

function returnNeighboringNumbers(num) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
    arr[i] = num - 1;
    arr[i+1] = num;
    arr [i+2]=num + 1;
    break;
    } return arr;
}
console.log(returnNeighboringNumbers(5));

function getMathResult(a,b) {
    let result = '';
    if (b === 0 || b<0 || typeof b === 'string') {
        result = a;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        for (let i = 1; i < b + 1; i++) {
            result += `${a * i}`;
            if (i !== b) {
                result += '---';
            }
        }
    }
    return result;
}

console.log(getMathResult(10,'f'));