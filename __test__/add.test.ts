import { add } from "../src/add";

describe("Add Function", () => {
  it("should return 0 on empty string.", () => {
    // Arrange
    const emptyString = "";

    // Act
    const result = add(emptyString);

    // Asset
    expect(result).toBe(0);
  });

  it("should return same output for single input number.", () => {
    // Arrange
    const input = "1";

    // Act
    const result = add(input);

    // Assert
    expect(result).toBe(parseInt(input));
  });

  it("should add 1, 4, 5, 6 upto 16.", () => {
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

  it("should handle new lines between numbers (instead of commas). ('1\n2,3' should return 6)", () => {
    // Arrange
    const input = "1\n2,3";
    const output = 6;

    // Act
    const result = add(input);

    // Asset
    expect(result).toBe(output);
  });

  // it("should throw an exception: 'negative numbers not allowed <negative_number>'", () => {
  //   // Arrange
  //   const input = "1,-2,3,-4";

  //   // Act

  //   // Assert
  //   expect(add(input)).toThrow("negative numbers not allowed -2");
  // });
});
