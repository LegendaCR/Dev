// Проверка: строки — анаграммы (одинаковые буквы с одинаковой кратностью)
const a = "listen";
const b = "silent";

function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const count = {};

  for (let i = 0; i < a.length; i++) {
    const c = a[i];
    count[c] = (count[c] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    const c = b[i];
    if (!count[c]) {
      return false;
    }
    count[c]--;
  }

  return true;
}

console.log(`Анаграммы "${a}" и "${b}":`, isAnagram(a, b));
