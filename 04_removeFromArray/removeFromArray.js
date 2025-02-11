const removeFromArray = function(arr, ...rem) {
    let newArr = []; 
    for (item of arr) {
        if (!rem.includes(item)) {
            newArr.push(item); 
        } 
    }
    return newArr; 
};

console.log(removeFromArray([1, 2, 3, 4], 2, '3', '4'))

// Do not edit below this line
module.exports = removeFromArray;
