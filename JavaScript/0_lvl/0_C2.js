// Поиск максимального числа в массиве
const arr = [-10, -3, -7, -1];

function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }

    let maxNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;
}

const findMaxNumber = findMax(arr);
console.log(`Максимальное число в массиве: ${findMaxNumber}`)