// Подсчитать нули в массиве
const arr = [0, 1, 0, 3, 0];

function countZeros(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count ++;
        }
    }

    return count;
}

const countNull = countZeros(arr);
console.log(`Кол-во нулей в массиве: ${countNull}`)