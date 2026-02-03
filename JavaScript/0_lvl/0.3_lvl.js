// Найти первый отрицательный элемент
const arr = [5, 3, -1, -7];

function solve(arr) {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result = arr[i];
            return arr[i];
        }
    }

    return null;
}

const firstNegativeNumber = solve(arr);
console.log(`Первый отрицательный элемент в массиве: ${firstNegativeNumber}`)