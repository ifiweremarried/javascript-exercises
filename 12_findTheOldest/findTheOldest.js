const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear(); 
    for (let item of arr) {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = currentYear; 
        }
    }
    console.log(arr); 
    arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1); 
    return arr[0]; 
};

// Do not edit below this line
module.exports = findTheOldest;