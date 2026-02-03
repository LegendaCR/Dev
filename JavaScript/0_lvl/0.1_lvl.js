// Сумма чисел массива
const arr = [1, 2, 3];

function solve(arr) {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

const sum = solve(arr);
console.log(`Сумма: ${sum}`)