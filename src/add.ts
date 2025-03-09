export function add(numbers: string): number {
  if (numbers.length === 0) return 0;

  const regex = /\n|,/;
  const nums = numbers.split(regex).map((num) => num.trim());

  let sum: number = 0;

  for (let num of nums) {
    const parsedNumber = parseInt(num);

    if (parsedNumber < 0)
      throw new Error(`negative numbers not allowed ${parsedNumber}`);

    sum += parseInt(num);
  }

  return sum;
}
