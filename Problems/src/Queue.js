class Queue {
  constructor(){
    this.state = {
      const arr : [],
      let front = -1,
      let rear = -1,
    }
  }
  isEmpty = () => {
    let { arr } = this.state;
    if(arr.length === 0) {
      return true;
    }
    return false;
  }

  enqueue = (element) => {
    let {arr, front, rear} = this.state;
    if(!this.isEmpty()) {
      if (front === -1) {
        front = 0;
      }
      rear += 1;
      arr[rear] = element;
      console.log(element+' inserted');
    }
  }

  dequeue = () => {
    let {arr, front, rear} = this.state;
    let deleted = arr[front];
    front += 1;
    console.log(deleted + ' is deleted');
    return deleted;
  }

  peek = () => {
    return this.state.arr[0];
  }
}
