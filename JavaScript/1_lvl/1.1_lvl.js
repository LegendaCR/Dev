// Подсчет гласных букв в строке
const str = "Java Script";

function countVowels(str) {
    if (str.length < 1) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i < str.length; i ++) {
        const char = str[i];
            if (
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'
            ) {
                count ++;
            }
    }

    return count;
}

const countVow = countVowels(str);
console.log(`Кол-во гласных в строке: ${countVow}`);