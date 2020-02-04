import Enumerable from '../src/setsTheory/classes/Enumerable';


const data = [
  { brand: 'bmw', model: 'x5' },
  { brand: 'kia', model: 'sorento' },
  { brand: 'audi', model: 'TT' },
];

beforeEach(() => {

});

describe('class Enumerable', () => {
  test('check that methods work correctly', () => {
    const Collection1 = new Enumerable(data);
    expect(Collection1.toArray()).toEqual(data);

    expect(
      Collection1
        .select(({ model }) => model)
        .toArray(),
    )
      .toEqual(['x5', 'sorento', 'TT']);

    expect(
      Collection1
        .orderBy(({ brand }) => brand)
        .toArray(),
    )
      .toEqual(
        [
          { brand: 'audi', model: 'TT' },
          { brand: 'bmw', model: 'x5' },
          { brand: 'kia', model: 'sorento' },
        ],
      );

    expect(Collection1.length).toEqual(3);

    expect(
      Collection1
        .where(({ brand }) => brand === 'kia')
        .toArray(),
    )
      .toEqual([{ brand: 'kia', model: 'sorento' }]);

    expect(Collection1.fieldSummaryCount('brand')).toEqual({ bmw: 1, kia: 1, audi: 1 });
  });
});
