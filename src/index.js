import {wordsCount} from './helpers/stringHelper.js';
const stopWords = ['and', 'or', 'a', 'the', ''];
const data1 = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];

console.log(wordsCount(data1, stopWords))
