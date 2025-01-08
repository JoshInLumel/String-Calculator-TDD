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
});
