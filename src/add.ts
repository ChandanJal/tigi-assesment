export function add(numbers: string): number {
  const nums = numbers.split(",").map((num) => parseInt(num.trim()));

  let sum: number = 0;

  for (let num of nums) {
    sum += num;
  }

  return sum;
}
