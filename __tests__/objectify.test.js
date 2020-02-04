import { objectify } from '../src/helpers/arrayHelper';

const arr = [1, 2, 3, 4, 5];
const formKey = (i) => `item-${i}`;

test('objectify', () => {
  const expected = {
    'item-1': 1,
    'item-2': 2,
    'item-3': 3,
    'item-4': 4,
    'item-5': 5,
  };

  expect(objectify(arr, formKey)).toEqual(expected);
  expect(objectify([], formKey)).toEqual({});
});
