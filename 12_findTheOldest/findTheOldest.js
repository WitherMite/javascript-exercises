const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let oldestMax = oldest.yearOfDeath;
        if (!oldest.yearOfDeath) oldestMax = new Date().getFullYear();

        let currentMax = current.yearOfDeath;
        if (!oldest.yearOfDeath) currentMax = new Date().getFullYear();

        const oldestAge = oldestMax - oldest.yearOfBirth;
        const currentAge = currentMax- current.yearOfBirth;

        return (oldestAge < currentAge) ? current : oldest;
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
