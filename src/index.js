import { l, length, toString as listToString, head, tail, concat } from '@hexlet/pairs-data';
import { make, append, node, filter, is } from '@hexlet/html-tags';

import select from './trees/select';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('p', l(node('ul', children1))));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'), node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('div', l(node('a', l(node('div', l(node('p', l(node('span', 'text'))))))))));
const dom11 = append(dom10, node('h1', 'prolog'));
const dom12 = append(dom11, node('p', 'is about logic'));
const dom = append(dom12, node('span', l(node('ul', l(node('div', l(node('div', l(node('p'))))))))));
//console.log(listToString(dom));
console.log(listToString(select(l('ul'), dom)));