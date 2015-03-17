/**
 * Created by tudor on 13/03/15.
 */

function getSingleParameterWarning(value) {
    return "Can't compare relationships because " + value + " is not a number.";
}

function getBothParametersWarning(value1, value2) {
    return "Can't compare relationships because " + value1 + " and " + value2 + " are not numbers.";
}

function getRelationship(x, y) {
    if (isNaN(x) && isNaN(y)) {
        return getBothParametersWarning(x, y);
    }

    if (isNaN(x)) {
        return getSingleParameterWarning(x);
    }

    if (isNaN(y)) {
        return getSingleParameterWarning(y);
    }

    if (x < y) {
        return "<";
    }
    if (x > y) {
        return ">";
    }
    if (x === y) {
        return "=";
    }
}

console.log(getRelationship(1, 4));
console.log(getRelationship(1, 1));
console.log(getRelationship("that", 2));
console.log(getRelationship("this", " something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

