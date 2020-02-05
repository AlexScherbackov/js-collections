import { similarPropsCount } from '../src/helpers/arrayHelper';

const testArr = [
  { brand: 'bmw', model: 'x5' },
  { brand: 'kia', model: 'sorento' },
  { brand: 'audi', model: 'TT' },
  { brand: 'bmw', model: 'x8' },
  { brand: 'audi', model: 'Q7' },
];

describe('similarPropsCount', () => {
  test('calculated similar element', () => {
    const expected1 = { bmw: 2, audi: 2, kia: 1 };
    expect(similarPropsCount(testArr, 'brand')).toEqual(expected1);
    const expected2 = {
      x5: 1, sorento: 1, TT: 1, x8: 1, Q7: 1,
    };
    expect(similarPropsCount(testArr, 'model')).toEqual(expected2);
    expect(similarPropsCount([], 'model')).toEqual({});
  });
});
