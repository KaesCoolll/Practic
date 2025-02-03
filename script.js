// 1. Функция для вычисления факториала
function factorial(n) {
    if (n < 0) return undefined; // Факториал отрицательного числа не определен
    if (n === 0) return 1; // Факториал 0 равен 1
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 2. Функция для нахождения длины самого длинного слова в строке
function longestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

// 3. Функция для нахождения наибольшего числа в каждом подмассиве
function largestInSubarrays(arrays) {
    return arrays.map(subArray => Math.max(...subArray));
}

// 4. Функция для обрезки строки с добавлением «…» в конце
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '…';
    }
    return str;
}

// 5. Функция для форматирования строки: каждое слово с заглавной буквы
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// 6. Функция для копирования элементов первого массива во второй начиная с индекса n
function copyArrayFromIndex(arr1, arr2, n) {
    const newArray = [...arr2]; // Копируем второй массив
    newArray.splice(n, 0, ...arr1); // Вставляем элементы первого массива начиная с индекса n
    return newArray;
}
// 7 Функция для удаления ложных значений из массива
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

// 8 Функция для проверки, содержит ли первая строка все буквы второй строки
function containsAllLetters(arr) {
    const [str1, str2] = arr.map(s => s.toLowerCase());
    return str2.split('').every(char => str1.includes(char));
}

// 9 Функция для разбивки массива на группы заданной длины
function chunkArray(arr, size) {
    const result = [];
    
    function chunkHelper(startIndex) {
        if (startIndex >= arr.length) return;
        result.push(arr.slice(startIndex, startIndex + size));
        chunkHelper(startIndex + size);
    }
    
    chunkHelper(0);
    return result;
}

// 10 Рекурсивная функция для заполнения массива числами от n до 1
function fillArray(n, arr = []) {
    if (n < 1) return arr;
    arr.push(n);
    return fillArray(n - 1, arr);
}

// Примеры использования функций
console.log(factorial(5)); // 120
console.log(longestWordLength("Hello world this is a test")); // 5
console.log(largestInSubarrays([[1, 2, 3], [4, 5], [6, 7, 8, 9]])); // [3, 5, 9]
console.log(truncateString("This is a long string that needs to be truncated.", 20)); // "This is a long strin…"
console.log(capitalizeWords("hello world! this is a test.")); // "Hello World! This Is A Test."
console.log(copyArrayFromIndex([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
console.log(removeFalsyValues([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log(containsAllLetters(['Hello World', 'ow'])); // true
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(fillArray(5)); // [5, 4, 3, 2, 1]



// РЕАЛИЗАЦИИИИ ФУНКЦИЙ !!!


// 1. Реализация функции map
function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// 2. Реализация функции filter
function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// 3. Реализация функции find
function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

// 4. Реализация функции some
function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

// 5. Реализация функции every
function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}


// 3 скрин 

//1
function masplus(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    let mathAll = 0
    for (let i = min; i <= max; i++) {
            mathAll += 1;
    }
    return mathAll
}

//2

function elemuniq(arr1, arr2) {
    const uniquearr1 = arr1.filter(elem => arr2.includes(elem))
    const uniquearr2 = arr2.filter(elem => arr1.includes(elem))
    return [...uniquearr1, ...uniquearr2]
}

//3
function reElem(arr, args) {
    return arr.filter(elem => args.includes(elem));
}

//4
function searchName(collection, source) {
    return collection.filter(obj => {
        return keys.every(key => obj[key] === source[key]);
    });
}

//6
function reWord(sentence, target, replacement) {
    const regex = new RegExp(target, 'gi');
    return sentence.replace(regex, (match) => {
        const Cap = match.charAt(0) === match.charAt(0).toUpperCase();
        if (Cap) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
        } else {
            return replacement.toLowerCase();
        }
    });
}

// 5
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

//7
function fearNotLetter(str) {
    const charArr = str.split('');
    const CharS = str.charCodeAt(0);
    const CharE = str.charCodeAt(str.length - 1);
    for (let i = CharS; i <= CharE; i++) {
        if (charArr.includes(String.fromCharCode(i))) {
            return String.fromCharCode(i);
        }
    }
    return undefined;
}

// 8. 
function uniteUnique(...arrays) {
    return [...new Set([].concat(...arrays))];
}

//9
function Html(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

//10
function sum(n) {
    let sum = 0
    for (let num = 2; num < n; num++) {
        let x = true;
        for (let i = 2; i*i <= num; i++) {
            if (num % i === 0) {
                x = false;
                break;
            }
        }
        if(x) {
            sum += num;
        }
    }
    return sum;
}

//11
function dropElem(arr, func) {
    while (arr.length > 0 && func(arr[0])) {
        arr.shift(); 
    }
    return arr; 
}

//12
function masredaction(arr1) {
    const res = []
    function edit(arr2) {
        for (let item of arr2) {
            if (Array.isArray(item)) {
                edit(item);
            }
            else {
                res.push(item);
            }
        }
    }
    edit(arr1);
    return res;
}

//13
function add(a) {
    if (arguments.length === 1) {
        return function(b) {
            return a + b;
        };
    }
    return a + arguments[1];
}
