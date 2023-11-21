const reverseString = function(string) {
    const characters = [];
    let length = string.length;
    let reversed = "";

    for (let i=1; i<=length; i++) {
        characters.push(string.charAt(length - i));
    }

    for (let i=0; i<length; i++) {
        reversed += characters.shift();
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
