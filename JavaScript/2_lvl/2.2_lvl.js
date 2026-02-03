// Сжать массив, убрав отрицательные (in-place)
let arr = [1, -2, 3, -4, 0, 8];

function compactNonNegatives(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] >= 0) {
            arr[count] = arr[i];
            count ++;
        }
    }

    return count;
}

const arrPositive = compactNonNegatives(arr);
console.log(`Кол-во неотрицательных чисел в новом массиве: ${arrPositive}`);