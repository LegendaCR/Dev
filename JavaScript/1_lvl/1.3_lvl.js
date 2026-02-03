// Проверка палиндрома
const str = "level";

function isPalindrom(str) {
    if (str.length === 0) {
        return true;
    }

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i --) {
        reversed = reversed + str[i];
    }

    return reversed === str;
}

const palindrom = isPalindrom(str);
console.log(`Является ли палиндромом эта строка: ${palindrom}`);