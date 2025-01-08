export function add(value: string): number {
  if (!value.length) return 0;

  const result = value.match(/\d+(\.\d+)?/g);

  const numbers = result ? result.map(Number) : [];

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    sum += number;
  }

  return sum;
}
