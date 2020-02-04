import arrayOps from '../constants/arrayOperations';

/* function uniq */
// takes an array and returns an array of unique elements of the original
// function don't mutate original array
const uniq = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

const objectify = (coll, select) => (
  coll.reduce((acc, item) => ({ ...acc, [select(item)]: item }), {})
);

const similarPropsCount = (list) => {
  const reducer = (acc, { prop }) => {
    if (Object.prototype.hasOwnProperty.call(acc, prop)) {
      acc[prop] += 1;
    } else {
      acc[prop] = 1;
    }

    return acc;
  };
  return list.reduce(reducer, {});
};

const applyOpToCollection = (coll, operationName, index, value, ops = arrayOps) => (
  ops.has(operationName) ? ops.get(operationName)(coll, index, value) : coll
);

const swapItemsNearIndex = (arr, index) => {
  const transformed = arr.slice();
  if (index === 0 || index >= transformed.length - 1) {
    return arr;
  }
  transformed.splice(index - 1, 3, arr[index + 1], arr[index], arr[index - 1]);
  return transformed;
};


export {
  uniq, objectify, similarPropsCount, applyOpToCollection, swapItemsNearIndex,
};
