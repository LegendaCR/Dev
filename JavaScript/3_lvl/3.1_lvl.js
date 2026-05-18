// Частота каждого числа в массиве (объект как «карта» счётчиков)
const arr = [1, 2, 2, 3, 1, 3, 3];

function frequencyMap(arr) {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    counts[n] = (counts[n] || 0) + 1;
  }

  return counts;
}

const freq = frequencyMap(arr);
console.log("Частоты:", freq);
