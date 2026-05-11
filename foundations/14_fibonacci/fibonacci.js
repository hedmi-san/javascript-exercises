const fibonacci = function (round) {
    if (round < 0) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    let temp = a;

    if (round == 0) {
        return 0;
    }

    if (round == 1) {
        return 1;
    }

    for (let index = 1; index < round; index++) {
        temp = a;
        a = b;
        b = temp + a;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
