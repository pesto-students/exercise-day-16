module.exports = class Queue {
  constructor() {
    //  this.state = {
    this.arr = [];
    //  }
  }
  isEmpty() {
    //  let { arr } = this.state;
    if (this.arr.length === 0) {
      return true;
    }
    return false;
  }

  enqueue(element) {
    //  let {arr, front, rear} = this.state;
    //  if(!this.isEmpty()) {
    //  console.log('inin')
    //  if (this.front === -1) {
    //  this.front = 0;
    //  }
    //  this.rear += 1;
    // this.arr[this.rear] = element;
    //  console.log(element+' inserted');
    //  }
    this.arr.push(element);
  }

  dequeue() {
    // let {arr, front, rear} = this.state;
    //  let deleted = this.arr[this.front];
    //  this.front += 1;
    //  console.log(deleted + ' is deleted');
    //  return deleted;
    if (this.arr.length === 0) {
      return null;
    }
    return this.arr.splice(0, 1)[0];
  }

  peek() {
    if (this.arr.length === 0) {
      return null;
    }
    return this.arr[0];
  }
  toString() {
    return this.arr.toString();
  }
  // eslint-disable-next-line
  toString(cb) {
    let str = '';
    // eslint-disable-next-line
    this.arr.forEach(el => str = str + cb(el) + ',');
    return str.substr(0, str.length - 1);
  }
};
