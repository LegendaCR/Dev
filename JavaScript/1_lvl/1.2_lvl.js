// Развернуть строку
const str = "gib yrev si kcid ym";

function reverseString(str) {
    if (str.length < 1) {
        return "";
    }

    let reverseString = "";

    for (let i = str.length - 1; i >= 0; i --) {
        reverseString += str[i];
    }

    return reverseString;
}

const reverse = reverseString(str);
console.log(`Развернутая строка: ${reverse}`);