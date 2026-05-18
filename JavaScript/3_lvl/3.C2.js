// Слить два отсортированных массива в один отсортированный (два указателя)
const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];

function mergeSorted(a, b) {
  const out = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      out.push(a[i]);
      i++;
    } else {
      out.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    out.push(a[i]);
    i++;
  }

  while (j < b.length) {
    out.push(b[j]);
    j++;
  }

  return out;
}

console.log("После слияния:", mergeSorted(a, b));
