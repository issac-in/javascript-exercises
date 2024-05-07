const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        const year = new Date().getFullYear();

        const oldestYoD = (oldest.yearOfDeath) ? oldest.yearOfDeath : year;
        const currentYoD = (current.yearOfDeath) ? current.yearOfDeath : year;

        const oldestAge = oldestYoD - oldest.yearOfBirth;
        const currentAge = currentYoD - current.yearOfBirth;

        return (oldestAge > currentAge) ? oldest : current;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
