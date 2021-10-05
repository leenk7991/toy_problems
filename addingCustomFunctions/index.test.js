/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

Object.assign(Array.prototype, {
  sort_array: function (reverse) {
    this.sort();
    if (reverse) {
      this.reverse();
    }
    return this;
  },
  get_first_element: function () {
    return this[0];
  },
  get_last_element: function () {
    return this[this.length - 1];
  },
  search_for_value: function (value) {
    return this.includes(value);
  },
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
  });
});
