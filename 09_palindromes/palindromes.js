const palindromes = function (arr) {
    let newArr = arr.split(""); 
    newArr.reverse(); 
    newArr.join(""); 
    return arr === newArr; 
};

// Do not edit below this line
module.exports = palindromes;
