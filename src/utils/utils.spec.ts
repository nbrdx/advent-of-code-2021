import { readFileAsLines } from './utils';
import * as path from 'path';

describe('utils', () => {
  describe('readFileAsLines()', () => {
    test('it should parse text file and return an array of line values', () => {
      const filename = 'input-test.txt';
      const result = readFileAsLines(path.resolve(__dirname, filename));

      expect(result).toEqual(['Hello', 'World', '!']);
    });
  });
});
