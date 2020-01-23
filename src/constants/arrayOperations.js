const arrayOps = new Map();
arrayOps.set('reset', () => []);
arrayOps.set('get', (arr, index) => arr[index]);
arrayOps.set('change', (arr, index, value) => (
  [].concat(arr.slice(0, index), value, arr.slice(index + 1))
));

export default arrayOps;
