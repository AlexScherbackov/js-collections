const toLoweCase = (str) => str.toLowerCase();

const wordsCount = (words, stopWords) => {
  const checkItemIsInStopWords = (item) => (stopWords.indexOf(item) === -1);
  const filtredWords = words.map(toLoweCase).filter(checkItemIsInStopWords);
  const reducer = (map, item) => (
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  );

  return filtredWords.reduce(reducer, new Map());
};

export {toLoweCase, wordsCount};