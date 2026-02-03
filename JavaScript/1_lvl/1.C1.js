// Подсчёт конкретного символа в строке
const str = "banana";
const char = "a";

function countChar(str, char) {
    if (str.length === 0) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i < str.length; i ++) {
        if (char === str[i]) {
            count ++;
        }
    }

    return count;
}

const count = countChar(str, char);
console.log(`Кол-во раз повторяющегося символа "${char}": ${count}`);