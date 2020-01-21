const uniq = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

const objectify = (list, selector) => {
  const reducer = (acc, item) => Object.defineProperty(
    acc,
    selector(item),
    {
      enumerable: true,
      configurable: false,
      writable: false,
      value: item,
    },
  );
  return list.reduce(reducer, {});
};

export { uniq, objectify };
