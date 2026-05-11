const getAge = function (person) {
    // The nullish coalescing assignment operator
    // only does the assignment if the left side is "nullish" (evaluates to undefined or null)
    // if the left side has any other value, no assignment happens
    // here, we use ??= to set the current year for our subtraction below only if there is no year of death
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (arr) {
    let indexOfTheOldest = 0;
    let oldestAge = 0;
    arr.forEach((item, index) => {
        if (oldestAge < getAge(item)) {
            indexOfTheOldest = index;
            oldestAge = getAge(item);
        }
    })

    return arr[indexOfTheOldest];
};



// Do not edit below this line
module.exports = findTheOldest;
