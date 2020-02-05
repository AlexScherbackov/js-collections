import arrayOps from '../constants/arrayOperations';

/* function uniq */
// takes an array and returns an array of unique elements of the original
// function don't mutate original array
const uniq = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

/* function objectify */
// takes array and function to form keys
// return object
const objectify = (coll, select) => (
  coll.reduce((acc, item) => ({ ...acc, [select(item)]: item }), {})
);

/* function similarPropsCount */
// takes list of objects and prop
// calculate what timesthis props is present in list
const similarPropsCount = (list, prop) => {
  const reducer = (acc, item) => {
    const key = item[prop];
    if (Object.prototype.hasOwnProperty.call(acc, key)) {
      acc[key] += 1;
    } else {
      acc[key] = 1;
    }

    return acc;
  };
  return list.reduce(reducer, {});
};

/* function applyOpToCollection */
// takes collesction, operation, index of collection, value of changed element and operations
// apply operation to collection
const applyOpToCollection = (coll, operationName, index, value, ops = arrayOps) => (
  ops.has(operationName) ? ops.get(operationName)(coll, index, value) : coll
);

/* function swapItemsNearIndex */
// takes an array and  an index
// swap left and right elements near the index
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
