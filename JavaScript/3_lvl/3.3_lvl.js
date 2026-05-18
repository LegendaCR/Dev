// Пересечение двух массивов: элементы, встречающиеся в обоих (в ответе без повторов)
const arr1 = [1, 2, 2, 3];
const arr2 = [2, 3, 3, 4];

function intersection(arr1, arr2) {
  const seen = {};

  for (let i = 0; i < arr1.length; i++) {
    seen[arr1[i]] = true;
  }

  const result = [];
  const outAlready = {};

  for (let i = 0; i < arr2.length; i++) {
    const x = arr2[i];
    if (seen[x] && !outAlready[x]) {
      result.push(x);
      outAlready[x] = true;
    }
  }

  return result;
}

console.log("Пересечение:", intersection(arr1, arr2));
