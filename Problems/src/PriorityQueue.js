class PriorityQueue {
  constructor() {
    this.items = [];
  }

  add(item, priority) {
    this.items.push({
      item,
      priority,
    });
    this.sort();
  }

  sort() {
    this.items = this.items.sort((a, b) => a.priority - b.priority);
  }

  peek() {
    return this.items[0].item;
  }

  poll() {
    const [currentItem, ...rest] = this.items;
    this.items = rest;
    return currentItem.item;
  }

  changePriority(item, newPriority) {
    this.items = this.items.map((queueItem) => {
      if (queueItem.item === item) {
        return {
          item,
          newPriority,
        };
      }
      return queueItem;
    });
    this.sort();
  }

  hasValue(item) {
    return this.items.find(queueItem => queueItem.item === item);
  }
}

module.exports = PriorityQueue;
