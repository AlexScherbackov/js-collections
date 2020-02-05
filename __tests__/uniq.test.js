import { uniq } from '../src/helpers/arrayHelper';

const testArr = [1, 2, true, false, 'someText', 1, true, 'someText'];


describe('should return uniq element from original array', () => {
  test('array with some dublicate', () => {
    expect(uniq(testArr)).toEqual([1, 2, true, false, 'someText']);
  });
  test('aray without dublicate', () => {
    expect(uniq([1, 2])).toEqual([1, 2]);
  });
  test('zero element array', () => {
    expect(uniq([])).toEqual([]);
  });
});
