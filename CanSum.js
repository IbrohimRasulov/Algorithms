//? Base cases:
//? targetSum = 0 => true
//? targetSum < 0 => false

//! Easy solution, but slow result
const canSum_1 = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (n of numbers) {
    const remainder = targetSum - n;
    const newNumbers = numbers.filter((x) => x !== n);
    if (canSum_1(remainder, newNumbers)) return true;
  }

  return false;
};

// console.log(canSum_1(9, [0, 1, 3, 4, 7, 10])); // false
// console.log(canSum_1(4, [1, 2, 3, 4, 5, 6]));  // true
// console.log(canSum_1(50, [1, 2, 3, 4, 5, 6])); // false
// console.log(canSum_1(7, [2, 3]));              // false
// console.log(canSum_1(12, [1, 2, 3, 4, 5, 6])); // true

// Slow result
// console.log(canSum_1(200, [0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 1, 3, 4, 7, 0, 1, 3, 4, 7])); // false

//! Advanced solution with memoization, and much faster result
const canSum_2 = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  const key = `${targetSum} [${numbers}]`
  if (key in memo) return memo[key]

  for (n of numbers) {
    const remainder = targetSum - n;
    const newNumbers = numbers.filter((x) => x !== n);

    if (canSum_2(remainder, newNumbers, memo)) {
      memo[key] = true
      return true;
    }
  }

  memo[key] = false
  return false;
}

// console.log(canSum_2(9, [0, 1, 3, 4, 7, 10])); // false
// console.log(canSum_2(4, [1, 2, 3, 4, 5, 6]));  // true
// console.log(canSum_2(50, [1, 2, 3, 4, 5, 6])); // false
// console.log(canSum_2(7, [2, 3]));              // false
// console.log(canSum_2(12, [1, 2, 3, 4, 5, 6])); // true

// Fast result
// console.log(canSum_2(200, [0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 0, 3, 4, 7, 0, 1, 3, 4, 7, 0, 1, 3, 4, 7, 1, 3, 4, 7, 0, 1, 3, 4, 7])); // false