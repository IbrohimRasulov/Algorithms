//! Easy solution, but slow result
const bestSum_1 = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;

    const index = numbers.indexOf(num);
    const filteredNumbers = [...numbers];
    filteredNumbers.splice(index, 1);

    const remainderResult = bestSum_1(remainder, filteredNumbers);

    if (remainderResult !== null) {
      const combination = [num, ...remainderResult];

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};

// console.log(bestSum_1(4, [1, 1, 2, 3, 4, 5])); // [4]
// console.log(bestSum_1(10, [1, 1, 2, 3, 12])) // null
// console.log(bestSum_1(10, [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 1, 9])); // [1, 9]
//# Result takes about 14 seconds or more
console.log(bestSum_1(50, [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 1]));

