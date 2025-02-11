const reverseString = function(str) {
    let arr = str.split(""); 
    let newArr = arr.reverse();  
    let newStr = newArr.join(""); 
    return newStr; 

};

console.log(reverseString('my first name'));  

// Do not edit below this line
module.exports = reverseString;
