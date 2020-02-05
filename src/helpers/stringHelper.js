/*function toLoweCase*/
//takes string and return string in lowwer case
const toLoweCase = (str) => str.toLowerCase();

/*function wordsCoun*/
//takes words array and stopWords array
//filtred words to exclude stopWords and return Map with counts every words
const wordsCount = (words, stopWords) => {
  const checkItemIsInStopWords = (item) => (stopWords.indexOf(item) === -1);
  const filtredWords = words.map(toLoweCase).filter(checkItemIsInStopWords);
  const reducer = (map, item) => (
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  );

  return filtredWords.reduce(reducer, new Map());
};

export { toLoweCase, wordsCount };