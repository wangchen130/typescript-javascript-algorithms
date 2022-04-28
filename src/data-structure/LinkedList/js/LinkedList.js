function LinkedList() {
  this.head = null
  this.length = 0
  function Node(data) {
    this.data = data
    this.next = null
  }
  // append(data) 往链表尾部追加数据
  // insert(position, data) 在指定位置（position）插入节点
  // getData(position) 获取指定位置的 data
  // indexOf(data) 返回指定 data 的 index，如果没有，返回 -1。
  // update(position, data) 修改指定位置节点的 data
  // removeAt(position) 删除指定位置的节点，并返回删除的那个节点
  // remove(data) 删除指定 data 的节点，并返回删除的那个节点
  // isEmpty() 判断链表是否为空
  // size() 获取链表的长度
  // toString() 链表数据以字符串形式返回
  LinkedList.prototype.append = function (data) {
    var newNode = new Node(data)
    if (this.head == null) {
      this.head = newNode
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length ++
  }
  LinkedList.prototype.insert = function (position, data) {
    // position = 0 表示新插入的节点是第一个节点
    // position = 1 表示新插入的节点是第二个节点，以此类推
    if (position < 0 || position > this.length) return false
    var newNode = new Node(data)
    // 表示在第一个位置插入
    if (position == 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      var current = this.head
      var prev = null
      var index = 0
      while (index < position) {
        index ++
        prev = current
        current = current.next
      }
      newNode.next = current
      prev.next = newNode
    }
    this.length ++
    return newNode
  }
  LinkedList.prototype.getData = function (position) {
    if (position < 0 || position >= this.length) return null
    var current = this.head
    var index = 0
    while (index < position) {
      index ++
      current = current.next
    }
    return current.data
  }
  LinkedList.prototype.indexOf = function (data) {
    var current = this.head
    var index = 0
    while (current) {
      if (data == current.data) {
        return index
      }
      index ++
      current = current.next
    }
    return -1
  }
  LinkedList.prototype.update = function (position, data) {
    if (position < 0 || position >= this.length) return false
    var current = this.head
    var index = 0
    while (index < position) {
      index ++
      current = current.next
    }
    current.data = data
    return current
  }
  LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null
    var current = this.head
    var prev = null
    var index = 0
    if (position == 0) {
      this.head = current.next
    } else {
      while (index < position) {
        index ++
        prev = current
        current = current.next
      }
      prev.next = current.next
    }
    this.length --
    return current
  }
  LinkedList.prototype.remove = function (data) {
    var current = this.head
    var prev = null
    if (data == this.head.data) {
      this.head = current.next
      this.length --
      return current
    } else {
      while (current) {
        if (data == current.data) {
          prev.next = current.next
          this.length --
          return  current
        }
        prev = current
        current = current.next
      }
      return false
    }
  }
  LinkedList.prototype.isEmpty = function () {
    return this.length == 0
  }
  LinkedList.prototype.size = function () {
    return this.length
  }
  LinkedList.prototype.toString = function () {
    var resultStr = ''
    var current = this.head
    while (current) {
      if (!current.next) {
        resultStr += current.data
      } else {
        resultStr += current.data + '->'
      }
      current = current.next
    }
    return resultStr
  }
}

// ---------------- 封装的单向链表结构测试 ---------------- //
console.log('// ----- 单向链表结构测试 START -----//');
const linkedList = new LinkedList();

// 测试 append 方法
linkedList.append('AA');
linkedList.append('BB');
linkedList.append('CC');
console.log(linkedList);

// 测试 toString 方法
console.log(linkedList.toString()); //--> AA->BB->CC

// 测试 insert 方法
linkedList.insert(0, '123');
linkedList.insert(2, '456');
console.log(linkedList.toString()); //--> 123->AA->456->BB->CC

// 测试 getData 方法
console.log(linkedList.getData(0)); //--> 123
console.log(linkedList.getData(1)); //--> AA

// 测试 indexOf 方法
console.log(linkedList.indexOf('AA')); //--> 1
console.log(linkedList.indexOf('ABC')); //--> -1

// 测试 update 方法
linkedList.update(0, '12345');
console.log(linkedList.toString()); //--> 12345->AA->456->BB->CC
linkedList.update(1, '54321');
console.log(linkedList.toString()); //--> 12345->54321->456->BB->CC

// 测试 removeAt 方法
linkedList.removeAt(3);
console.log(linkedList.toString()); //--> 12345->54321->456->CC

// 测试 remove 方法
linkedList.remove('CC');
console.log(linkedList.toString()); //--> 12345->54321->456

// 测试 isEmpty 方法
console.log(linkedList.isEmpty()); //--> false

// 测试 size 方法
console.log(linkedList.size()); //--> 3

console.log('// ----- 单向链表结构测试 END -----//');
