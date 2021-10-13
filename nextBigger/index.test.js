/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

const nextBigger = function (num) {
  let digits = num.toString().split("");
  digits.sort().reverse();
  let res = parseInt(digits.join(""));
  return res > num ? res : -1;
};

describe("Tests", () => {
  it("test nextBigger", () => {
    expect(nextBigger(12)).toStrictEqual(21);
    expect(nextBigger(513)).toEqual(531);
    expect(nextBigger(2071)).toEqual(7210);
    expect(nextBigger(9)).toEqual(-1);
    expect(nextBigger(111)).toEqual(-1);
    expect(nextBigger(531)).toEqual(-1);
  });
});
