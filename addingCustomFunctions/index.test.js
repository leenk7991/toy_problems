/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

Object.assign(Array.prototype, {
  /**
   * Operates on an instance of Array and returns the sorted array.
   *
   * @param {bool} reverse param if you want to reverse sort
   * @return {<Array>} the sorted array
   */
  sort_array: function (reverse) {
    this.sort();
    if (reverse) {
      this.reverse();
    }
    return this;
  },
  /**
   * Operates on an instance of Array and returns the first element of the array.
   *
   * @return {Any} first element of the array
   */
  get_first_element: function () {
    return this[0];
  },
  /**
   * Operates on an instance of Array and returns the last element of the array.
   *
   * @return {Any} first element of the array
   */
  get_last_element: function () {
    return this[this.length - 1];
  },
  /**
   * Operates on an instance of Array and returns true if the value is found in the array.
   *
   * @param {Any} value value to be found in the array
   * @return {bool} true if value is found in nthe a
   */
  search_for_value: function (value) {
    return this.includes(value);
  },
});

Object.defineProperty(Array.prototype, "test", {
  value: "yes",
  writable: true,
});

describe("Tests", () => {
  it("test array functions", () => {
    let arr = ["z", "a", "b", "c", "d"];

    expect(arr.sort_array()).toStrictEqual(["a", "b", "c", "d", "z"]);
    expect(arr.sort_array(true)).toStrictEqual(["z", "d", "c", "b", "a"]);
    expect(arr.get_first_element()).toStrictEqual("z");
    expect(arr.get_last_element()).toStrictEqual("a");
    expect(arr.search_for_value("c")).toStrictEqual(true);
    expect(arr.search_for_value("e")).toStrictEqual(false);
    expect(arr.test).toStrictEqual("yes");
  });
});
