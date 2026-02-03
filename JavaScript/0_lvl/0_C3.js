// Найти второй максимум
const arr = [1, 5, 3, 9, 2];

function findSecondMax(arr) {
    if (arr.length < 2) {
        return null;
    }

    let max1 = null;
    let max2 = null;

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (max1 === null || current > max1) {
            if (max1 !== null && current !== max1) {
                max2 = max1;
            }
            max1 = current;
        } 
        else if (
            current < max1 &&
            (max2 === null || current > max2)
        ) {
            max2 = current;
        }
    }

    return max2;
}

const secondMax = findSecondMax(arr);
console.log(`Второе максимальное число в массиве: ${secondMax}`);
