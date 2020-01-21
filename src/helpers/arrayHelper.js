const uniq = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

const objectify = (coll, select) => coll.reduce((acc, item) => ({ ...acc, [select(item)]: item }), {});

export { uniq, objectify };
