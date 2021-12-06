import { readFileSync } from 'fs';

export function readFileAsLines(filename: string) {
  try {
    return readFileSync(filename, 'utf-8').replace(/\n$/, '').split('\n');
  } catch (err) {
    console.error(err);
  }
}
