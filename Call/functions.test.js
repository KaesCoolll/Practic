const { myMap, myFilter, myFind, mySome, myEvery } = require('./functions'); // Предполагается, что функции находятся в файле functions.js

describe('Custom Array Functions', () => {

    test('myMap should apply a function to each element', () => {
        const result = myMap([1, 2, 3], x => x * 2);
        expect(result).toEqual([2, 4, 6]);
    });

    test('myFilter should filter elements based on a condition', () => {
        const result = myFilter([1, 2, 3, 4], x => x > 2);
        expect(result).toEqual([3, 4]);
    });

    test('myFind should return the first element that matches the condition', () => {
        const result = myFind([1, 2, 3, 4], x => x > 2);
        expect(result).toBe(3);
    });

    test('mySome should return true if at least one element matches the condition', () => {
        const result = mySome([1, 2, 3], x => x > 2);
        expect(result).toBe(true);
    });

    test('myEvery should return true if all elements match the condition', () => {
        const result = myEvery([1, 2, 3], x => x > 0);
        expect(result).toBe(true);
    });

});
