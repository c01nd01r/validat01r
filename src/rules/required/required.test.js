import required from './required';

describe('required', () => {
  test('value is empty string', () => {
    expect(required('')).toBe(false);
  });
  test('value is empty spaced string', () => {
    expect(required('   ')).toBe(false);
  });
  test('value is undefined', () => {
    expect(required(undefined)).toBe(false);
  });
  test('value is null', () => {
    expect(required(null)).toBe(false);
  });
  test('value is empty array', () => {
    expect(required([])).toBe(true);
  });
  test('value is plain object', () => {
    expect(required({})).toBe(true);
  });
  test('value is bool false', () => {
    expect(required(false)).toBe(true);
  });
  test('value is bool true', () => {
    expect(required(true)).toBe(true);
  });
});
