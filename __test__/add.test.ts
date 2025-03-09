import { add } from "../src/add";

describe("Add", () => {
  it("should add 1, 4, 5, 6 upto 16", () => {
    // Arrange
    const arr = [1, 4, 5, 6];
    const sum = arr.reduce((a, b) => a + b, 0);
    const arrStr = arr.join(",");

    // Act
    const result = add(arrStr);

    // Assert
    expect(result).toBe(sum);
  });
});
