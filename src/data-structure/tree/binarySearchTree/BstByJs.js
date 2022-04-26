function BstByJs() {
  function Node(val) {
    this.val = val
    this.left = null
    this.right = null
  }
  this.root = null
  /**
   * 添加节点，外部调用
   * @param val：节点数据
   */
  BstByJs.prototype.insert = function (val) {
    var newNode = new Node(val)
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertRecursion(this.root, newNode)
    }
  }
  /**
   * 递归添加节点，内部调用
   * @param node：插入新节点的树
   * @param newNode：需要添加的新节点
   */
  BstByJs.prototype.insertRecursion = function (node, newNode) {
    if (newNode.val < node.val) {
        if (node.left == null) {
          node.left = newNode
        } else {
          this.insertRecursion(node.left, newNode)
        }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertRecursion(node.right, newNode)
      }
    }
  }
}

console.log('===================BstByJs============');

var bst = new BstByJs()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(19)
bst.insert(6)
console.log(bst);
