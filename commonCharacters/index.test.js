/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  var already_found = [];
  str1 = str1.replace(" ", "");
  str2 = str2.replace(" ", "");
  str1_length = str1.length;
  for (var i = 0; i < str1_length; i++) {
    ch = str1[i];
    if (str2.includes(ch)) {
      already_found.push(ch);
      str2 = str2.replace(ch, "");
    }
  }
  return already_found.join("");
};

describe("Tests", () => {
  it("test commonCharacters", () => {
    expect(commonCharacters("acexivou", "aegihobu")).toEqual("aeiou");
    expect(commonCharacters("abcdefgggii", "ccdfghki")).toEqual("cdfgi");
  });
});
