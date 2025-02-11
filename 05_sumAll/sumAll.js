const sumAll = function(intStart, intEnd) {
    let result = 0;
    if (intStart < 0 || intEnd < 0) {
        result = "ERROR"; 
    } else if (intStart < intEnd) {
        for (i = intStart; i <= intEnd; i += 2) {
            result += i;  
        }
    } else if (intStart > intEnd) {
        for (i = intEnd; i <= intStart; i++) {
            result += i;  
        }
    } 

    return result; 
};

console.log(sumAll(1, 4)); 

// Do not edit below this line
module.exports = sumAll;
