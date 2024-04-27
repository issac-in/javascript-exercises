const removeFromArray = function(inputArray, ...targets) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < targets.length; j++) {
            if (inputArray[i] === targets[j]) {
                inputArray.splice(i,1);
                i--;
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
