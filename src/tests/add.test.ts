import { add } from "../add";

describe("Add Operation", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  test("adds the comma-separated numbers in a given string", () => {
    expect(add("1,2")).toBe(3);
  });
  test("throws an error when the given string contains only one number", () => {
    expect(() => add("1,\n")).toThrow(
      "At least two numbers are required for addition"
    );
  });
  test("throws an error when the given string contains negative number/s", () => {
    expect(() => add("-7,-5;;;-1")).toThrowErrorMatchingInlineSnapshot(
      `"Negatives not allowed: -7,-5,-1"`
    );
  });
  test("assumes numbers greater than thousand as zero in a given string", () => {
    expect(add("2%%%1001")).toBe(2);
  });
  test("adds the comma-separated numbers in a given string", () => {
    expect(add("1,2")).toBe(3);
  });
  test("adds the numbers separated by a combination of newline and comma delimiters in the given string", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  test("adds the numbers separated by different delimiters in the given string", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//[*][%]\n1*2%3")).toBe(6);
    expect(add("/[***]\n1***2***3")).toBe(6);
  });
});
