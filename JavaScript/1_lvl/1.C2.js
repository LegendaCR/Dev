// Первая неповторяющаяся буква
const str = "leetcode";

function firstUniqueChar(str) {
    if (str.length === 0) {
        return null;
    }

    for (let i = 0; i < str.length; i ++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count ++;
            }
        }

        if (count === 1) {
            return str[i];
        }
    }

    return null;
}

const first = firstUniqueChar(str);
console.log(`Первая неповторяющаяся буква: ${first}`);