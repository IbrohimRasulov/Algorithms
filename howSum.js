// Base cases:
// gridTraveler(m,1) => 1
// gridTraveler(1,n) => 1
// gridTraveler(m,0) => 0
// gridTraveler(0,n) => 0

//! Easy solution, but slow result
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const index = numbers.indexOf(num);
    const newNumbers = [...numbers];
	  newNumbers.splice(index, 1);
    const remainderResult = howSum(remainder, newNumbers);

    if (remainderResult !== null) return [num, ...remainderResult];
  }

  return null;
};
