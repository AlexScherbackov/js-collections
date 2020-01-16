class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, order = 'asc') {
    const orders = new Map(
      [
        ['asc', new Map([['>', 1], ['<', -1]])],
        ['desc', new Map([['>', -1], ['<', -1]])],
      ],
    );

    this.collection.sort((a, b) => {
      if (fn(a) > fn(b)) {
        return orders.has(order)
          ? orders.get(order).get('>')
          : orders.get('asc').get('>');
      }

      if (fn(a) < fn(b)) {
        return orders.has(order)
          ? orders.get(order).get('<')
          : orders.get('asc').get('<');
      }

      return 0;
    });

    return this;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
