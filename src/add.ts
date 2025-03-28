export function add(numbers: string): number {
  if (isEmpty(numbers)) return 0;

  let delimiter = getDelimiter(numbers);
  numbers = sanitizeNumbersString(numbers);

  const nums = parseTextToNumberArray(numbers, delimiter);

  throwIfAnyNegativePresent(nums);

  return performOperation(nums, delimiter);
}

function performOperation(nums: number[], delimiter: RegExp): number {
  return nums.reduce((a, b) => {
    if (delimiter.test("\\*")) {
      if (a === 0) return b;
      else return a * b;
    }

    return a + b;
  }, 0);
}

function getDelimiter(numbers: string): RegExp {
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) return new RegExp(`\\${delimiterMatch[1]}`);
  }
  return /\n|,/;
}

function sanitizeNumbersString(numbers: string): string {
  return numbers.startsWith("//")
    ? numbers.substring(numbers.indexOf("\n") + 1)
    : numbers;
}

function parseTextToNumberArray(numbers: string, delimiter: RegExp) {
  return numbers
    .split(delimiter)
    .map((num) => parseInt(num.trim()))
    .filter((num) => !isNaN(num));
}

function throwIfAnyNegativePresent(nums: number[]) {
  const negativeNumbers = nums.filter((n) => n < 0);

  // Check if there any negetiveNumbers
  if (negativeNumbers.length > 0)
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
}

function isEmpty(str: string): boolean {
  return str.length === 0;
}
