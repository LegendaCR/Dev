// Подсчёт положительных чисел
const arr = [1, -2, 3, 0, 5];

function solve(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count ++;
        }
    }

    return count;
}

const sum = solve(arr);
console.log(`Кол-во положительных чисел в массиве: ${sum}`)