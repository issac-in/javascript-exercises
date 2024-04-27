const reverseString = function(str) {
    let reversed = "";
    for (let i = -1; i >= -str.length; i--) {
        reversed = reversed.concat(str.at(i));
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
