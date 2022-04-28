function PriorityQueue() {
  this.items = []
  function QueueElement(data, priority) {
    this.data = data
    this.priority = priority
  }
  // enQueue(data, priority) 入队，将元素按优先级加入到队列中
  // deQueue() 出队，从队列中删除队头元素，返回删除的那个元素
  // front() 查看队列的队头元素
  // isEmpty() 查看队列是否为空
  // size() 查看队列中元素的个数
  // toString() 将队列中的元素以字符串形式返回
  PriorityQueue.prototype.enQueue = function (data, priority) {
    var element = new QueueElement(data,priority)
    if (this.isEmpty()) {
      this.items.push(element)
    } else {
      var isAdded = false
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i]
        // 让新插入的元素进行优先级比较，priority 值越小，优先级越大，就越靠前
        if (element.priority < item.priority) {
          this.items.splice(i, 0, element)
          isAdded = true
          break
        }
      }
      if (!isAdded) {
        this.items.push(element)
      }
    }
  }
  PriorityQueue.prototype.deQueue = function () {
    return this.items.shift()
  }
  PriorityQueue.prototype.front = function () {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items[0]
    }

  }
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  PriorityQueue.prototype.size = function () {
    return this.items.length
  }
  PriorityQueue.prototype.toString = function () {
    var result = ''
    for (var i = 0; i < this.items.length; i++) {
      result += this.items[i].data + '-' + this.items[i].priority + ' '
    }
    return result
  }
}

// ---------------- 封装的优先队列结构测试 ---------------- //
console.log('// ----- 优先队列结构测试 START -----//');

const priorityQueue = new PriorityQueue();

// 入队 enQueue() 测试
priorityQueue.enQueue('A', 10);
priorityQueue.enQueue('B', 15);
priorityQueue.enQueue('C', 11);
priorityQueue.enQueue('D', 20);
priorityQueue.enQueue('E', 18);
console.log(priorityQueue.toString());


// 出队 deQueue() 测试
priorityQueue.deQueue();
priorityQueue.deQueue();
console.log(priorityQueue.items);
//--> output:
// QueueElement {element: "B", priority: 15}
// QueueElement {element: "E", priority: 18}
// QueueElement {element: "D", priority: 20}

// isEmpty() 测试
console.log('isEmpty() 测试:',priorityQueue.isEmpty()); //--> false

// size() 测试
console.log('size() 测试:',priorityQueue.size()); //--> 3

// toString() 测试
console.log('toString() 测试:',priorityQueue.toString()); //--> B-15 E-18 D-20

console.log('// ----- 优先队列结构测试 END -----//');
