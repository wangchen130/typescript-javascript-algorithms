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
      var prevNode = null
      var index = 0
      while (index < position) {
        index ++
        prevNode = current
        current = current.next
      }
      newNode.next = current
      prevNode.next = newNode
    }
    this.length ++
    return newNode
  }

}
