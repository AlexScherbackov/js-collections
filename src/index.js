import Enumerable from './setsTheory/classes/Enumerable.js';

const cars = [
{ brand: 'bmw', model: 'm5', year: 2014 },
{ brand: 'bmw', model: 'm4', year: 2013 },
{ brand: 'kia', model: 'sorento', year: 2014 },
{ brand: 'kia', model: 'rio', year: 2010 },
{ brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = new Enumerable(cars);
console.log(coll);
const coll1 = coll.where({ brand: 'kia' }, car => car.year < 2013);
console.log('coll1', coll1.toArray());