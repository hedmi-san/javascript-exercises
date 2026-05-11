const palindromes = function (word) {
    let size = word.length;
    for (let index = 0; index < word.length; index++) {
        if (word[index] !== word[(size - 1) - index]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
