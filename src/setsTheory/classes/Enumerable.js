class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build((coll) => coll.map(fn));
  }

  orderBy(fn, order = 'asc') {
    const orders = new Map(
      [
        ['asc', new Map([['>', 1], ['<', -1]])],
        ['desc', new Map([['>', -1], ['<', 1]])],
      ],
    );

    const sortByOrder = (coll) => {
      const newCollection = coll.slice().sort((a, b) => {
        const a1 = fn(a);
        const b1 = fn(b);

        if (a1 > b1) {
          return orders.has(order)
            ? orders.get(order).get('>')
            : orders.get('asc').get('>');
        }

        if (a1 < b1) {
          return orders.has(order)
            ? orders.get(order).get('<')
            : orders.get('asc').get('<');
        }

        return 0;
      });

      return newCollection;
    };

    return this.build(sortByOrder);
  }

  where(...compareParameters) {
    const newOps = compareParameters.map(
      (item) => {
        if (typeof item === 'function') {
          return (coll) => coll.filter(item);
        }

        const fn = (coll) => coll.filter(
          (element) => Object.keys(item).every(
            (key) => element[key] === item[key],
          ),
        );
        return fn;
      },
    );
    return this.build(newOps);
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, fn) => fn(acc), this.collection.slice());
    }
    return this.memo;
  }

  get length() {
    return this.toArray().length;
  }
}

export default Enumerable;
