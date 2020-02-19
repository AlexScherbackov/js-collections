import { wordsCount } from '../src/helpers/stringHelper';

const testArr = ['Hi', 'bye', 'thanks', 'letter', 'bye'];
const stopArr = ['hi', 'letter'];

describe('wordsCount', () => {
  test('basic functionality', () => {
    const expected = new Map([['bye', 2], ['thanks', 1]]);
    expect(wordsCount(testArr, stopArr)).toEqual(expected);
  });
});
