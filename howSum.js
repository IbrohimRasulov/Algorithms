//? Base cases:
//? targetSum = 0 => true
//? targetSum < 0 => false

//! Easy solution, but slow result
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;

    const index = numbers.indexOf(num);
    const filteredNumbers = [...numbers];
    filteredNumbers.splice(index, 1);

    const remainderResult = howSum(remainder, filteredNumbers);

    if (remainderResult !== null) return [num, ...remainderResult];
  }

  return null;
};
