const sum = require('./sum');

test('adds [1, 2, 3] to equal 6', () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test('adds [5, 10, 15] to equal 30', () => {
  expect(sum([5, 10, 15])).toBe(30);
});

test('adds [1, [2, 3], 4] to equal 10', () => {
  expect(sum([1, [2, 3], 4])).toBe(10);
});

test('adds [[1, 2], [3, 4]] to equal 10', () => {
  expect(sum([[1, 2], [3, 4]])).toBe(10);
});

test('throws error if input is not an array', () => {
  expect(() => sum(123)).toThrow('Input must be an array');
});

test('throws error if array contains non-number elements', () => {
  expect(() => sum([1, '2', 3])).toThrow('Array must contain only numbers or nested arrays');
});

test('throws error if array contains objects', () => {
  expect(() => sum([1, {a: 2}, 3])).toThrow('Array must contain only numbers or nested arrays');
});

test('throws error if array contains boolean values', () => {
  expect(() => sum([1, true, 3])).toThrow('Array must contain only numbers or nested arrays');
});