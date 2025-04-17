import { reverseString } from "./reverseString";

describe("reverseString", () => {
  test("Ví dụ 1", () => {
    const input = ["h", "e", "l", "l", "o"];
    expect(reverseString(input)).toEqual(["o", "l", "l", "e", "h"]);
  });

  test("Chuỗi 2 ký tự", () => {
    expect(reverseString(["a", "b"])).toEqual(["b", "a"]);
  });

  test("Chuỗi rỗng", () => {
    expect(reverseString([])).toEqual([]);
  });
});
