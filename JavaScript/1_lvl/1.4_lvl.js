// Подсчёт одинаковых соседних символов
const str = "aabbcccddd";

function countAdjacentDuplicates(str) {
    if (str.length < 2) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i < str.length; i ++) {
        if (str[i] === str[i-1]) {
            count ++;
        }
    }

    return count;
}

const countNumbers = countAdjacentDuplicates(str);
console.log(`Одинаковых соседних символов: ${countNumbers}`);