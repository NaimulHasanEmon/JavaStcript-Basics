function evenArr(num) {
    let even = [];
    for (let i of num) {
        if (i % 2 === 0) {
            even.push(i);
        }
    }
    return even;
}

function oddArr(num) {
    let odd = [];
    for (let i of num) {
        if (i % 2 !== 0) {
            odd.push(i);
        }
    }
    return odd;
}

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Even numbers: ' + evenArr(number));
console.log('Odd numbers: ' + oddArr(number));