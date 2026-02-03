// Проверка палиндрома массива (in-place, два указателя)
let arr = [1, 2, 3, 4];

function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    }

    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left ++;
        right --;
    }

    return arr;
}

const reverseArr = reverseArray(arr);
console.log(`Развернутый массив: ${reverseArr}`);