function removeDuplicates(array) {
    let newArray = []
    for (let i of array) {
        if (!newArray.includes(i))
            newArray.push(i)
    }
    return newArray
}

const array = [12, 54, 32, 14, 17, 12, 42, 32]
console.log(removeDuplicates(array))
