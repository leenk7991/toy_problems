/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function (n) {
  if (n == 0) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

console.log(primeTester(7)); //true
console.log(primeTester(5)); //true
console.log(primeTester(18)); //false

const genetatePrimes = function (n) {
  let primes = Array.from(Array(n).keys());
  return primes.filter((num) => primeTester(num));
};

console.log(genetatePrimes(100));
/*
[
   1,  2,  3,  5,  7, 11, 13, 17,
  19, 23, 29, 31, 37, 41, 43, 47,
  53, 59, 61, 67, 71, 73, 79, 83,
  89, 97
]
*/
