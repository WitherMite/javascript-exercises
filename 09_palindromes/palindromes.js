const palindromes = function (string) {
    badChars = ["!", " ", ".", ","];
    let word = string.toLowerCase();

    badChars.forEach((badChar) => {
        word = word.replaceAll(badChar, "");
    });

    const reverseWord = word.split("").reverse().join("");
    if (reverseWord === word) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
