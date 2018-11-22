import isNumber from './isNumber';

describe('IsNumber', () => {
  test('value is plain object', () => {
    expect(isNumber({})).toBe(false);
  });
  test('value is function', () => {
    expect(isNumber(() => {})).toBe(false);
  });
  test('value is null', () => {
    expect(isNumber(null)).toBe(false);
  });
  test('value is array', () => {
    expect(isNumber([])).toBe(false);
  });
  test('value is array with number', () => {
    expect(isNumber([123])).toBe(false);
  });
  test('value is bool true', () => {
    expect(isNumber(true)).toBe(false);
  });
  test('value is bool false', () => {
    expect(isNumber(false)).toBe(false);
  });
  test('value is NaN', () => {
    expect(isNumber(NaN)).toBe(false);
  });
  test('value is undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });
  test('value is Infinity', () => {
    expect(isNumber(Infinity)).toBe(false);
  });
  test('value is word', () => {
    expect(isNumber('qwe')).toBe(false);
  });
  test('value is empty string', () => {
    expect(isNumber('')).toBe(false);
  });
  test('value is spacing string', () => {
    expect(isNumber('    ')).toBe(false);
  });

  test('value is string of number', () => {
    expect(isNumber('123')).toBe(true);
  });
  test('value is number', () => {
    expect(isNumber(123)).toBe(true);
  });
});
