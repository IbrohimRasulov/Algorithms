//* Base cases:
//* targetSum = 0 => [] (empty array)
//* targetSum < 0 => null

//! Easy solution, but slow result
const howSum_1 = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;

    const index = numbers.indexOf(num);
    const filteredNumbers = [...numbers];
    filteredNumbers.splice(index, 1);

    const remainderResult = howSum_1(remainder, filteredNumbers);

    if (remainderResult !== null) return [num, ...remainderResult];
  }

  return null;
};

// console.log(howSum_1(7, [2, 2, 3]));
// console.log(howSum_1(4, [1, 2, 5, 10]));
// console.log(howSum_1(7, [5, 3, 7, 4]));
//# Result takes about 15 seconds or more
// console.log(howSum_1(100, [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 1]));

//! Advanced solution with memoization, and much faster result
const howSum_2 = (targetSum, numbers, memo = {}) => {
  const key = `${targetSum} [${numbers}]`;
  if (key in memo) return memo[key];

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;

    const index = numbers.indexOf(num);
    const filteredNumbers = [...numbers];
    filteredNumbers.splice(index, 1);

    const remainderResult = howSum_2(remainder, filteredNumbers, memo);

    if (remainderResult !== null) {
      return [num, ...remainderResult];
    }
  }

  memo[key] = null;
  return null;
};

// console.log(howSum_2(7, [2, 2, 3]));
// console.log(howSum_2(4, [1, 2, 5, 10]));
// console.log(howSum_2(7, [5, 3, 7, 4]));
//# Result takes about 0.4 seconds or less
// console.log(howSum_2(100, [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 1]));
