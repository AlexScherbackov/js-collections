import { arrayOps } from '../constants/arrayOperations.js';

const uniq = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

const objectify = (coll, select) => coll.reduce((acc, item) => ({ ...acc, [select(item)]: item }), {});

const similarPropsCount = (list, prop) => {
  const reducer = (acc, { prop }) => {
    if (acc.hasOwnProperty(prop)) {
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


export { uniq, objectify, similarPropsCount, applyOpToArray };
