import { add } from "../src/add";

describe("Add", () => {
  it("should return 0 on empty string", () => {
    // Assets
    const emptyString = "";

    // Act
    const result = add(emptyString);

    expect(result).toBe(0);
  });

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

  it("should handle any amount of numbers.", () => {
    // Arrange
    const smallArray = Array.from({ length: 20 }).map((_, i) => i);
    const midArray = Array.from({ length: 50 }).map((_, i) => i);
    const largeArray = Array.from({ length: 100 }).map((_, i) => i);

    const smallArraySum = smallArray.reduce((a, b) => a + b, 0);
    const midArraySum = midArray.reduce((a, b) => a + b, 0);
    const largeArraySum = largeArray.reduce((a, b) => a + b, 0);

    // Act
    const smallArrayResult = add(smallArray.join(", "));
    const midArrayResult = add(midArray.join(", "));
    const largeArrayResult = add(largeArray.join(", "));

    // Assert
    expect(smallArrayResult).toBe(smallArraySum);
    expect(midArrayResult).toBe(midArraySum);
    expect(largeArrayResult).toBe(largeArraySum);
  });
});
