import { l, isEmpty, head, tail, concat, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line
import { is, toString as htmlToString, hasChildren, children, reduce, filter, map } from '@hexlet/html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
const iter = (search, source, acc) => {
  const searchHead = head(search);
  const searchRest = tail(search);

  console.log('is source like searchHead', listToString(searchHead), listToString(source), is(searchHead, source));
  if (is(searchHead, source)) {
    if (isEmpty(searchRest)) {
      console.log('concat', listToString(acc), listToString(source), concat(acc, l(source)))
      return concat(acc, l(source));
    }

    if (hasChildren(source)) {
      console.log('children', listToString(children(source)))
      return iter(searchRest, children(source), acc);
    }
  } else {
    if (hasChildren(source)) {
      console.log('isn"t soirce like searchHead', listToString(search), listToString(children(source)), listToString(acc))
      return iter(search, children(source), acc);
    }
  }

  return acc;
};
const solution = (searchList, sourceList, accumulator = l()) => {
  if (isEmpty(sourceList)) {
    return accumulator;
  }

  const sourceHead = head(sourceList);
  const sourceRest = tail(sourceList);
  console.log('sourceHead', listToString(sourceHead));
  console.log('sourceRest', listToString(sourceRest));
  const newAcc = iter(searchList, sourceHead, accumulator);
  return concat(newAcc, solution(searchList, sourceRest, l()));
};

export default solution; 
// END