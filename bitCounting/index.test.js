/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  return num.toString(2).match(/1/g || []).length;
};

describe("Tests", () => {
  it("test bitCounting", () => {
    expect(bitCounting(1234)).toStrictEqual(5);
    expect(bitCounting(10)).toStrictEqual(2);
  });
});
