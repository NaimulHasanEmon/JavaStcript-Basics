let num = [1, 2, 3, 4, 5];
let revNum = [];
for (let i of num) {
    console.log(i);
    revNum.unshift(i);
}
console.log(revNum);