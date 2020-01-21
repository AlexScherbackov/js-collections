class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
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

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, fn) => fn(acc), this.collection.slice());
    }
    return this.memo.slice();
  }

  get length() {
    return this.toArray().length;
  }
}

export default Enumerable;
