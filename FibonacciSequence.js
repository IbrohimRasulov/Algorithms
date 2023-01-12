// Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21
//? Base cases:
//? fib(1) => 1
//? fib(2) => 1

//! Easy solution, but slow result
const fib_1 = (n) => {
  if (n <= 2) return 1;
  return fib_1(n - 1) + fib_1(n - 2);
};

// fib_1(6)
// fib_1(8)
// fib_1(50)

//! Advanced solution with memoization, and much faster result
const fib_2 = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];

  memo[n] = fib_2(n - 1, memo) + fib_2(n - 2, memo);
  return memo[n];
};

// fib_2(6)
// fib_2(8)
// fib_2(50)
