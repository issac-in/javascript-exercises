const palindromes = function (inputStr) {
    const regexAnyNonWordCharacter = /\W/g;
    const str = inputStr.toLowerCase().replace(regexAnyNonWordCharacter,"");
    for (let i = 0; i < Math.trunc(str.length / 2); i++) {
        if (str.at(i) !== str.at(str.length-1 - i)) { return false; } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
