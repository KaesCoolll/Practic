// functions.js
function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

// Экспортируем функции
module.exports = { myMap, myFilter, myFind, mySome, myEvery };
