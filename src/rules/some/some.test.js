import some from './some';

describe('some', () => {
  test('value is empty array', () => {
    expect(some([], '')).toBe(false);
  });
  test("value with primitive type can't be found", () => {
    expect(some([1], 2)).toBe(false);
  });
  test("value with reference type can't be found", () => {
    expect(some([{}], {})).toBe(false);
  });
  test('value can be found', () => {
    expect(some([1], 1)).toBe(true);
  });
});
