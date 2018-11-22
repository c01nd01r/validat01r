import minNumber from './minNumber';

describe('minNumber', () => {
  test('value < minValue', () => {
    expect(minNumber(10, 5)).toBe(false);
  });
  test('value > minValue', () => {
    expect(minNumber(10, 15)).toBe(true);
  });
});
