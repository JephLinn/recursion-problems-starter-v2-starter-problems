/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

const fibonacci = (n, i = 0, j = 1, count = 1, sum = 0) => {
  if (n <= 2) {
    return 1
  }
  
  if (n === count) {
    return sum
  }
  
  if (n > count) {
    sum = i + j;

    i = j;

    j = sum;

    return fibonacci(n, i, j, count + 1, sum)

  }

}
  console.log(fibonacci(9))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
  