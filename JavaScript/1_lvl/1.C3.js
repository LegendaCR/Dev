// Удалить повторяющиеся соседние символы
const str = "aabbcccddd";

function removeAdjacentDuplicates(str) {
    if (str.length < 2) {
        return str;
    }

    let string = "";

    for (let i = 0; i < str.length; i ++) {
        if (str[i] !== str[i-1]) {
            string += str[i];
        }
    }

    return string;
}

const stringResult = removeAdjacentDuplicates(str);
console.log(`Строка с удаленными повторяющимися символами: ${stringResult}`);