import defference from '../src/setsTheory/setsAction';

const testObj = new Set();
const car = { brand: 'kia', model: 'sorento' };

beforeEach(() => {
  testObj.add('SomeText');
  testObj.add(1);
  testObj.add(false);
  testObj.add(car);
});

describe('defference - fn to get defference betwen sets', () => {
  test('check primitives and object', () => {
    const primitiveSet = new Set([1, 2, 3, 4, 'SomeText', true, false]);
    const objectSet = new Set([car]);
    expect(defference(testObj, primitiveSet)).toEqual(objectSet);
    expect(defference(testObj, objectSet)).toStrictEqual(new Set(['SomeText', 1, false]));
  });

  test('zero set', () => {
    expect(defference(new Set(), new Set())).toEqual(new Set());
  });
});
