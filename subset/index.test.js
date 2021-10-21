/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/

// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function (arr) {
  let is_subset = false;
  this.forEach((el) => {
    is_subset = arr.indexOf(el) < 0 ? false : true;
  });
  return is_subset;
};
let a = ["c", "d"];
console.log(a.isSubsetOf(["b", "c", "d"])); //true
let map1 = { name: "potato" };
let map2 = { name: "tomato" };
let map3 = { name: "sugar" };
let b = [1, 2, ["another", "array"], map1];
console.log(b.isSubsetOf([2, map2, map1])); //true
console.log(b.isSubsetOf([5, 6, map3])); //false
