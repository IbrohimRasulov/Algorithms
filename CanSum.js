//? Base cases:
//? targetSum = 0 => true
//? targetSum < 0 => false

//! Easy solution, but slow result
const canSum_1 = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let n of numbers) {
    const remainder = targetSum - n;
    const newNumbers = numbers.filter((x) => x !== n);
    if (canSum_1(remainder, newNumbers) === true) return true;
  }

  return false;
};

// canSum_1(4, [1, 2, 3, 4, 5, 6]);  // true
// canSum_1(70, [1, 2, 3, 4, 5, 6]); // false
// canSum_1(7, [2, 3]);              // false
// canSum_1(12, [1, 2, 3, 4, 5, 6]); // true
// canSum_1(9, [0, 1, 3, 4, 7, 10]); // false

//! Advanced solution with memoization, and much faster result
const canSum_2 = () => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;


}