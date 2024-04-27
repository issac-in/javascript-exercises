const sumAll = function(int1, int2) {
    let isNaN = Number.isNaN(int1) || Number.isNaN(int2);
    let isNotInteger = !(Number.isInteger(int1) && Number.isInteger(int2));
    let isNegative = (int1 < 0) || (int2 < 0);
    if (isNaN || isNotInteger || isNegative) { return "ERROR"; 
    } else {
        let min = (int1 < int2) ? int1 : int2;
        let max = (int1 >= int2) ? int1 : int2;
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
