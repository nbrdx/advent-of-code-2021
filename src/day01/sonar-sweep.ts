import { readFileAsLines } from '../utils/utils';

export function partOne() {
  const numbers = readFileAsLines(__dirname + '/input.txt').map((line) =>
    Number(line)
  );

  return getIncrementsCount(numbers);
}

function getIncrementsCount(numbers: number[]): number {
  return numbers.reduce((count, value, index) => {
    if (index === 0 || value <= numbers[index - 1]) {
      return count;
    }

    return count + 1;
  }, 0);
}

function applySlidingWindow(numbers: number[], slidingWindow: number) {
  const arr = [];
  const lastWindowIndex = numbers.length - slidingWindow + 1;
  for (let i = 0; i < lastWindowIndex; i++) {
    const sum = numbers[i] + numbers[i + 1] + numbers[i + 2];
    arr.push(sum);
  }

  return arr;
}

export function partTwo() {
  const numbers = readFileAsLines(__dirname + '/input.txt').map((line) =>
    Number(line)
  );

  const numbersWithSlidingWindow = applySlidingWindow(numbers, 3);

  return getIncrementsCount(numbersWithSlidingWindow);
}
