// Удалить элементы меньше нуля
const arr = [1, -2, 3, -4, 0];

function removeNegatives(arr) {
    if (arr.length === 0) {
        return [];
    }

    let newArr = [];

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

const arrPositive = removeNegatives(arr);
console.log(`Новый массив с неотрицательными числами: ${arrPositive}`);