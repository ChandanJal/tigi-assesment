export function add(numbers: string): number {
  if (numbers.length === 0) return 0;

  const nums = numbers.split(",").map((num) => num.trim());

  let sum: number = 0;

  for (let num of nums) {
    sum += parseInt(num);
  }

  return sum;
}
