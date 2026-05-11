const sumAll = function (firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return "ERROR";
    if (firstNumber < 0 || secondNumber < 0) return "ERROR";

    return (Math.abs(firstNumber - secondNumber) + 1) * ((firstNumber + secondNumber) / 2);
};

// Do not edit below this line
module.exports = sumAll;
