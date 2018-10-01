/* eslint-disable no-underscore-dangle */

// implementation of priority queue as a max-heap
class PriorityQueue {
  constructor() {
    // each elem of this array will have the shape:
    // {
    //    priority: <NUMBER>,
    //    data: <ANY>
    // }

    // higher priority elements will be closer to the front of the array
    // a lower value for the priority key indicates higher priority
    this._elems = [];
  }

  poll() {
    if (this._elems.length === 0) {
      throw new Error('Cannot poll empty queue');
    }

    this.__swap(0, this._elems.length - 1);
    const ret = this._elems.pop().data;
    this.__bubbleDown(0);
    return ret;
  }

  peek() {
    if (this._elems.length === 0) {
      throw new Error('Cannot peek at empty queue');
    }

    return this._elems[0].data;
  }

  add(data, priority) {
    const obj = { priority, data };
    this._elems.push(obj);
    this.__bubbleUp(this._elems.length - 1);
  }

  changePriority(data, newPriority) {
    const idx = this.__getIdx(data);
    if (idx === -1) {
      throw new Error('Cannot change priority of data that is not in queue');
    }

    const oldPriority = this._elems[idx].priority;
    this._elems[idx].priority = newPriority;
    if (newPriority < oldPriority) {
      this.__bubbleUp(idx);
    } else if (newPriority > oldPriority) {
      this.__bubbleDown(idx);
    }
  }

  hasValue(data) {
    return this.__getIdx(data) !== -1;
  }

  __getIdx(data) {
    return this._elems.findIndex(elem => elem.data === data);
  }

  __bubbleUp(idx) {
    const parentIdx = this.__parentIdx(idx);
    if (parentIdx !== null && this._elems[idx].priority < this._elems[parentIdx].priority) {
      this.__swap(idx, parentIdx);
      this.__bubbleUp(parentIdx);
    }
  }

  __bubbleDown(idx) {
    const [lChildIdx, rChildIdx] = [...this.__childIdxs(idx)];

    if (lChildIdx === null && rChildIdx === null) {
      // nothing to do
    } else {
      let higherPriorityChildIdx;

      if (rChildIdx === null) {
        higherPriorityChildIdx = lChildIdx;
      } else {
        higherPriorityChildIdx =
          this._elems[lChildIdx].priority < this._elems[rChildIdx].priority ?
            lChildIdx :
            rChildIdx;
      }

      if (this._elems[higherPriorityChildIdx].priority < this._elems[idx].priority) {
        this.__swap(higherPriorityChildIdx, idx);
        this.__bubbleDown(higherPriorityChildIdx);
      }
    }
  }

  // disabling below rule for symmetry (__childIdxs uses this and is accepted as a class method)
  __parentIdx(idx) { // eslint-disable-line class-methods-use-this
    if (idx === 0) return null;
    return Math.ceil(idx / 2) - 1;
  }

  __childIdxs(idx) {
    const lChildIdx = (2 * idx) + 1;
    const rChildIdx = (2 * idx) + 2;

    return [
      lChildIdx >= this._elems.length ? null : lChildIdx,
      rChildIdx >= this._elems.length ? null : rChildIdx,
    ];
  }

  __swap(idx1, idx2) {
    const tmp = this._elems[idx1];
    this._elems[idx1] = this._elems[idx2];
    this._elems[idx2] = tmp;
  }
}

module.exports = PriorityQueue;
