// Base cases:
// gridTraveler(m,1) => 1
// gridTraveler(1,n) => 1
// gridTraveler(m,0) => 0
// gridTraveler(0,n) => 0

//! Easy solution, but slow result
const gridTraveler_1 = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  return gridTraveler_1(m - 1, n) + gridTraveler_1(m, n - 1);
};

// console.log(gridTraveler_1(22, 13)); // too sloooow!

//! Advanced solution with memoization, and faster result
const gridTraveler_2 = (m, n, memo = {}) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  const key = m + "," + n;
  if (key in memo) return memo[key];

  memo[key] = gridTraveler_2(m - 1, n, memo) + gridTraveler_2(m, n - 1, memo);
  return memo[key];
};

// console.log(gridTraveler_2(22, 13)); // fast!
