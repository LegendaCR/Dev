// Удалить заданное значение из массива (in-place)
let arr = [7, 6, 7, 8, 9];
val = 7;

function removeElement(arr, val) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] !== val) {
      arr[count] = arr[i];
      count ++;
    }
  }

  return count;
}

const count = removeElement(arr, val);
console.log("Результат (первые count элементов):", arr.slice(0, count));
console.log(`Кол-во чисел в новом массиве с удаленными "${val}": ${count}`);