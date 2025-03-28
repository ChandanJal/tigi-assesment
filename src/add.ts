export function add(numbers: string): number {
  if (isEmpty(numbers)) return 0;

  let delimiter = /\n|,/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);

    if (delimiterMatch) {
      const pattern = `\\${delimiterMatch[1]}`;

      delimiter = new RegExp(pattern);

      numbers = numbers.substring(delimiterMatch[0].length);
    }
  }

  const nums = numbers
    .split(delimiter)
    .map((num) => parseInt(num.trim()))
    .filter((num) => !isNaN(num));

  const negativeNumbers: number[] = [];

  const sum = nums.reduce((a, b) => {
    if (b < 0) {
      negativeNumbers.push(b);
    }

    if (delimiter.test("\\*")) {
      if (a === 0) return b;
      else return a * b;
    }

    return a + b;
  }, 0);

  // Check if there any negetiveNumbers
  if (negativeNumbers.length > 0)
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );

  return sum;
}

function isEmpty(str: string): boolean {
  return str.length === 0;
}
