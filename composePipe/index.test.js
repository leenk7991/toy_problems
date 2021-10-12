/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGHT to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 *
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

// source: https://www.educative.io/edpresso/function-composition-in-javascript
const compose =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

var greet = function (name) {
  return "hello " + name;
};
var exclaim = function (statement) {
  return statement.toUpperCase() + "!";
};
var welcome = compose(exclaim, greet);

console.log(welcome("meow"));

const pipe = (...fns) => compose(...fns);

var add2 = function (number) {
  return number + 2;
};
var multiplyBy3 = function (number) {
  return number * 3;
};
var addAndMultiply = pipe(add2, multiplyBy3);
console.log(addAndMultiply(5)); //should be 21
var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
console.log(addAndMultiplyTwice(5)); //should be 63
