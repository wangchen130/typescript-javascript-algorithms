function Queue() {
  this.items = []
  // enQueue(item) 入队，将元素加入到队列中
  // deQueue() 出队，从队列中删除队头元素，返回删除的那个元素
  // front() 查看队列的队头元素
  // isEmpty() 查看队列是否为空
  // size() 查看队列中元素的个数
  // toString() 将队列中的元素以字符串形式返回
  Queue.prototype.enQueue = function (item) {
    this.items.push(item)
  }
  Queue.prototype.deQueue = function () {
    return this.items.shift()
  }
  Queue.prototype.front = function () {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items[0]
    }

  }
  Queue.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  Queue.prototype.size = function () {
    return this.items.length
  }
  Queue.prototype.toString = function () {
    return this.items.join(' ')
  }
}

const queue = new Queue();

// enQueue() 测试
queue.enQueue('a');
queue.enQueue('b');
queue.enQueue('c');
queue.enQueue('d');
console.log(queue.items); //--> ["a", "b", "c", "d"]

// deQueue() 测试
queue.deQueue();
queue.deQueue();
console.log(queue.items); //--> ["c", "d"]

// front() 测试
console.log(queue.front()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d
