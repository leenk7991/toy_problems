/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = (romanNumeral) => {
  str_arr = romanNumeral.split("").reverse();
  var num = DIGIT_VALUES[str_arr[0]];
  const array_length = str_arr.length;
  for (var i = 1; i < array_length; i++) {
    if (DIGIT_VALUES[str_arr[i]] >= DIGIT_VALUES[str_arr[i - 1]]) {
      num += DIGIT_VALUES[str_arr[i]];
    } else {
      num -= DIGIT_VALUES[str_arr[i]];
    }
  }
  return num;
};

describe("Tests", () => {
  it("test translateRomanNumeral", () => {
    expect(translateRomanNumeral("XXI")).toStrictEqual(21);
    expect(translateRomanNumeral("IV")).toStrictEqual(4);
  });
});
