import { add } from "../add";

describe("Add Operation", () => {
  test("adds the comma-separated numbers in a given string", () => {
    expect(add("1,2")).toBe(3);
  });
});
