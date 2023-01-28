## Algorithms I solved with recursion and memoization.

### 1. Fibonacci Sequence

> Write a function `fib(n)` that takes in a number as an argument. The function should return the n-th number of the Fibonacci sequence. Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ... and so on. Function `fib(7)` should return `13`.

### 2. Grid Traveler

> Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right. In how many ways can you travel to the goal on a grid with dimensions m \* n? Write a function `gridTraveler(m, n)` that calculates this. Function `gridTraveler(2, 3)` should return `3`.

### 3. Can Sum

> Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array. You may assume that all input numbers are nonnegative. Function `canSum(7, [2,3,4])` should return `true`.

### 4. How Sum

> Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return `null`. If there are multiple combinations possible, you may return any single one. Function `howSum(7, [5, 3, 4, 7))` should return `[3,4]` or `[7]`.

### 5. Best Sum

> Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum. If there is a tie for the shortest combination, you may return any one of the shortest. Function `bestSum(7, [5, 3, 4, 7))` should return `[7]`.
