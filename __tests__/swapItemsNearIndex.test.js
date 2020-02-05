import { swapItemsNearIndex } from '../src/helpers/arrayHelper';

const testArr = [1, 2, 3, 4, 5];

describe('swapItemsNearIndex', () => {
  test('swap tests', () => {
    expect(swapItemsNearIndex(testArr, 2)).toEqual([1, 4, 3, 2, 5]);
    expect(swapItemsNearIndex(testArr, 0)).toEqual(testArr);
    expect(swapItemsNearIndex(testArr, testArr.length)).toEqual(testArr);
  });

  test('unmutable swap', () => {
    swapItemsNearIndex(testArr, 2);
    expect(testArr).toEqual([1, 2, 3, 4, 5]);
  });
});
