class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    return new Enumerable(this.collection.map(fn));
  }

  orderBy(fn, order = 'asc') {
    const orders = new Map(
      [
        ['asc', new Map([['>', 1], ['<', -1]])],
        ['desc', new Map([['>', -1], ['<', -1]])],
      ],
    );

    const newCollection = this.collection.slice().sort((a, b) => {
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

    return new Enumerable(newCollection);
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
