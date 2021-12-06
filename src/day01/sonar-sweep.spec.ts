import { partOne, partTwo } from './sonar-sweep';

describe('sonar-sweep', () => {
  describe('partOne()', () => {
    test('it should return the number of lines with a superior value than the previous line', () => {
      const result = partOne();

      expect(result).toBe(1448);
    });
  });

  describe('partTwo()', () => {
    test('it should return the number of lines with a superior value than the previous line', () => {
      const result = partTwo();

      expect(result).toBe(1471);
    });
  });
});
