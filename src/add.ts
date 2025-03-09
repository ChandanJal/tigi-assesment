export function add(numbers: string): number {
  if (numbers.length === 0) return 0;

  const regex = /\n|,/;
  const nums = numbers.split(regex).map((num) => num.trim());

  let sum: number = 0;

  const negativeNumbers = [];

  for (let num of nums) {
    const parsedNumber = parseInt(num);

    if (parsedNumber < 0) {
      negativeNumbers.push(parsedNumber);
    }

    sum += parseInt(num);
  }

  // Check if there any negetiveNumbers
  if (negativeNumbers.length > 0)
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );

  return sum;
}
