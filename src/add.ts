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

  const nums = numbers.split(delimiter).map((num) => num.trim());

  let sum: number = 0;

  const negativeNumbers = [];

  for (let num of nums) {
    const parsedNumber = parseInt(num);

    if (isNaN(parsedNumber)) continue;

    if (parsedNumber < 0) {
      negativeNumbers.push(parsedNumber);
    }

    if (delimiter.test("\\*")) {
      if (sum === 0) {
        sum = parseInt(num);
      } else {
        sum *= parseInt(num);
      }
    } else {
      sum += parseInt(num);
    }
  }

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
