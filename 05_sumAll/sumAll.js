const sumAll = function(start, end) {
    let sum = 0;
    
    if (checkError(start) || checkError(end)) {
        return "ERROR";
    }
    if (end < start) {
        const temp = end;
        end = start;
        start = temp;
    }

    while (start <= end) {
        sum += start;
        start++;
    }
    return sum;
};

function checkError(num) {
    if (num < 0 || typeof num !== "number") {
        return true;
    }
}


// Do not edit below this line
module.exports = sumAll;
