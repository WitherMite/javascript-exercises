const removeFromArray = function(array, ...removeArgs) {
    let newArray = array
    for (arg of removeArgs) {
        while (newArray.indexOf(arg) !== -1) {
            newArray.splice(newArray.indexOf(arg),1);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
