export default function Stack() {
  this.items = []

  // push(element):添加一个新元素到栈顶位置
  // pop():移除栈顶的元素，同时返回被移除的元素。
  // peek():返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)。
  // isEmpty():如果栈里没有任何元素就返回true，否则返回false。
  // size():返回栈里的元素个数。这个方法和数组的length属性很类似。
  // toString():将栈结构的内容以字符形式返回。

  Stack.prototype.push = function (element) {
    this.items.push(element)
  }

  Stack.prototype.pop = function () {
    if (this.isEmpty()) {
      return null
    } else {
      return this.items.pop()
    }
  }

  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  Stack.prototype.size = function () {
    return this.items.length
  }
  Stack.prototype.toString = function () {
    return this.items.join(' ')
  }
}
const stack = new Stack();

// push() 测试
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items); //--> [1, 2, 3]

// pop() 测试
console.log(stack.pop()); //--> 3

// peek() 测试
console.log(stack.peek()); //--> 2

// isEmpty() 测试
console.log(stack.isEmpty()); //--> false

// size() 测试
console.log(stack.size()); //--> 2

// toString() 测试
console.log(stack.toString()); //--> 1 2
