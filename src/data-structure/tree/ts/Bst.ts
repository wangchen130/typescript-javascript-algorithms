type NodeType = {
  val: number;
  left: NodeType;
  right: NodeType;
}
class BstNode {
  public val: NodeType["val"]
  public left: NodeType
  public right: NodeType
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class Bst {
  public root: NodeType
  constructor() {
    this.root = null
  }
  // insert(val: number)：向树中插入一个新的键。
  public insert(val: number) {
    const newNode = new BstNode(val)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertRecursion(this.root, newNode)
    }
  }
  private insertRecursion (node: NodeType, newNode: NodeType) {

  }
  // search(key)：在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
  // preOrderTraverse：通过先序遍历方式遍历所有节点。
  // inOrderTraverse：通过中序遍历方式遍历所有节点。
  // postOrderTraverse：通过后序遍历方式遍历所有节点。
  // min：返回树中最小的值/键。
  // max：返回树中最大的值/键。
  // remove(val)：从树中移除某个键，
}
