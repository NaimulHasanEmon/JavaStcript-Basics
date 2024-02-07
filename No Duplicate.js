let students = ['emon', 'chaity', 'chitra', 'chaity', 'lameya', 'emon'];
let numbers = [1, 2, 3, 4, 5, 6, 3, 5, 3, 1];

function noDuplicates(array) {
    const unique = [];
    for (let i of array) {
        if (unique.includes(i) === false)
            unique.push(i);
    }
    return unique;
}
console.log(noDuplicates(students));
console.log(noDuplicates(numbers));