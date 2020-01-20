class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  orderBy(fn, order = 'asc') {
    const orders = new Map(
      [
        ['asc', new Map([['>', 1], ['<', -1]])],
        ['desc', new Map([['>', -1], ['<', 1]])],
      ],
    );

    const newOps = this.operations.slice();
    const sortByOrder = (coll) => {
      const newCollection = coll.slice().sort((a, b) => {
        const a1 = fn(a);
        const b1 = fn(b);
        console.log(a1, b1)
        if (a1 > b1) {
          console.log(orders.has(order), orders.get(order).get('>'))
          return orders.has(order)
          ? orders.get(order).get('>')
          : orders.get('asc').get('>');
        }

        if (a1 < b1) {
          console.log(orders.has(order), orders.get(order).get('<'))
          return orders.has(order)
          ? orders.get(order).get('<')
          : orders.get('asc').get('<');
        }

        return 0;
      });

      return newCollection;
    };

    newOps.push(sortByOrder);

    return new Enumerable(this.collection.slice(), newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  toArray() {
    return this.operations.reduce((acc, fn) => fn(acc), this.collection.slice());      
  }
}

export default Enumerable;
