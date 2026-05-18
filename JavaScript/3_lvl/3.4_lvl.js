// Удалить дубликаты из отсортированного массива (in-place), вернуть новую длину
let arr = [0, 0, 1, 1, 1, 2, 2, 3];

function removeDuplicatesSorted(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let write = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[write - 1]) {
      arr[write] = arr[i];
      write++;
    }
  }

  return write;
}

const newLen = removeDuplicatesSorted(arr);
console.log("Длина без дубликатов:", newLen);
console.log("Префикс массива:", arr.slice(0, newLen));
