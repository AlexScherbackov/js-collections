import { applyOpToCollection } from '../src/helpers/arrayHelper';

const coll = [1, 2, 3, false, true, 'sometext'];

describe('applyOpToCollection', () => {
  test('test base functionality', () => {
    expect(applyOpToCollection(coll, 'reset')).toEqual([]);
    expect(applyOpToCollection(coll, 'get', 2)).toEqual(3);
    expect(applyOpToCollection(coll, 'change', 2, 'someChanges')).toEqual(
      [1, 2, 'someChanges', false, true, 'sometext'],
    );
  });

  test('not mutate original coll', () => {
    applyOpToCollection(coll, 'reset');
    expect(coll).toEqual([1, 2, 3, false, true, 'sometext']);
    applyOpToCollection(coll, 'get', 2);
    expect(coll).toEqual([1, 2, 3, false, true, 'sometext']);
    applyOpToCollection(coll, 'change', 2, 'someChanges');
    expect(coll).toEqual([1, 2, 3, false, true, 'sometext']);
  });
});
