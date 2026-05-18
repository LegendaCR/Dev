// Два числа в массиве дают сумму target — вернуть индексы (ровно одно решение)
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  const indexByValue = {};

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (indexByValue[need] !== undefined) {
      return [indexByValue[need], i];
    }

    indexByValue[nums[i]] = i;
  }

  return null;
}

const pair = twoSum(nums, target);
console.log(`Индексы для суммы ${target}:`, pair);
