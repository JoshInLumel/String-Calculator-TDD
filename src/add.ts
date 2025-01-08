export function add(value: string): number {
  if (!value.length) return 0;

  const result = value.match(/\d+(\.\d+)?/g);

  const numbers = result ? result.map(Number) : [];

  if (!numbers.length || numbers.length == 1) {
    throw new Error("At least two numbers are required for addition");
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    sum += number;
  }

  return sum;
}
