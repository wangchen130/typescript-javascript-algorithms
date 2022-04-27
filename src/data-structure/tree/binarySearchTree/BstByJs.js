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
      this.insertNode(this.root, newNode)
    }
  }
  /**
   * 递归添加节点，内部调用
   * @param node：插入新节点的树
   * @param newNode：需要添加的新节点
   */
  BstByJs.prototype.insertNode = function (node, newNode) {
    if (newNode.val < node.val) {
        if (node.left == null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  // search(val)：在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
  /**
   * preOrderTraverse：通过先序遍历方式遍历所有节点。
   * @param handler: 回调函数，将遍历的节点传给handler进行处理。
   */
  BstByJs.prototype.preOrderTraverse = function (handler) {
    this.preOrderTraverseNode(this.root, handler)
  }
  /**
   * 递归遍历节点
   * @param node：树节点。
   * @param handler： 回调函数，将遍历的节点传给handler进行处理。
   */
  BstByJs.prototype.preOrderTraverseNode = function (node,handler) {
    if (node) {
      handler(node)
      this.preOrderTraverseNode(node.left, handler)
      this.preOrderTraverseNode(node.right,handler)
    }
  }
  /**
   * inOrderTraverse：通过中序遍历方式遍历所有节点。
   * @param handler： 回调函数，将遍历的节点传给handler进行处理。
   */
  BstByJs.prototype.inOrderTraverse = function (handler) {
    this.inOrderTraverseNode(this.root,handler)
  }
  /**
   * 递归遍历节点
   * @param node：树节点。
   * @param handler： 回调函数，将遍历的节点传给handler进行处理。
   */
  BstByJs.prototype.inOrderTraverseNode = function (node, handler) {
    if (node) {
      this.inOrderTraverseNode(node.left, handler)
      handler(node)
      this.inOrderTraverseNode(node.right, handler)
    }
  }
  // postOrderTraverse：通过后序遍历方式遍历所有节点。
  BstByJs.prototype.postOrderTraverse = function (handler) {
    this.postOrderTraverseNode(this.root, handler)
  }
  BstByJs.prototype.postOrderTraverseNode = function (node, handler) {
    if (node) {
      this.postOrderTraverseNode(node.left, handler)
      this.postOrderTraverseNode(node.right, handler)
      handler(node)
    }
  }
  /**
   * min：返回树中最小的值/键。
   * @returns {*|null}
   */
  BstByJs.prototype.min = function () {
    let current = this.root
    while (current.left) {
      current = current.left
    }
    return current && current.val || current
  }
  /**
   * max：返回树中最大的值/键。
   * @returns {*|null}
   */
  BstByJs.prototype.max = function () {
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current && current.val || current
  }
  /**
   * remove(val)：从树中移除某个键，
   * @param val: 节点值
   */
  BstByJs.prototype.remove = function (val) {
    // 删除节点的父节点
    let parent = null
    // 当前节点，即要删除的节点
    let current = this.root
    // 删除节点是否是父节点的左子节点
    let isLeft = true
    while (val !== current.val) {
      parent = current
      if (val < current.val) {
        current = current.left
        isLeft = true
      } else {
        current = current.right
        isLeft = false
      }
      if (!current) return false
    }
    // 删除节点为叶子节点
    if (!current.left && !current.right) {
      if (current == this.root) {
        this.root = null
      } else if (isLeft) {
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (!current.right) { // 删除节点只有一个左子节点
      if (current == this.root) {
        this.root = current.left
      } else if (isLeft) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (!current.left) { // 删除节点只有一个右子节点
      if (current == this.root) {
        this.root = current.right
      } else if (isLeft) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else {
      let successorNode = this.getSuccessor(current)
      if (current == this.root) {
        this.root = successorNode
      } else if (isLeft) {
        parent.left = successorNode
      } else {
        parent.right = successorNode
      }
      successorNode.left = current.left
    }
    return current
  }
  /**
   * 获取后继节点，返回的后继节点为删除节点的右子树
   * @param node： 删除节点
   */
  BstByJs.prototype.getSuccessor = function (node) {
    let parent = node
    let current = node.right
    while (current.left) {
      parent = current
      current = current.left
    }
    if (parent != node) {
      parent.left = current.right
      current.right = node.right
    }
    return current
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
// console.log(bst);
// bst.preOrderTraverse(function (node) {
//   console.log(node.val);
// })
// console.log('------------------------');
// bst.inOrderTraverse(function (node) {
//   console.log(node.val);
// })
// console.log('------------------------');
// bst.postOrderTraverse(function (node) {
//   console.log(node.val);
// })
// console.log('------------------------');
// console.log(bst.min());
// console.log(bst.max());

bst.inOrderTraverse(function (node) {
  console.log(node.val);
})
console.log('------------------------');
console.log(bst.remove(6));
bst.inOrderTraverse(function (node) {
  console.log(node.val);
})
console.log('------------------------');
console.log(bst.remove(11));
bst.inOrderTraverse(function (node) {
  console.log(node.val);
})
console.log('------------------------');
console.log(bst.remove(15));
bst.inOrderTraverse(function (node) {
  console.log(node.val);
})
console.log('------------------------');

console.log(bst.remove(19));
bst.inOrderTraverse(function (node) {
  console.log(node.val);
})
console.log('------------------------');
console.log(bst.remove(25));
bst.inOrderTraverse(function (node) {
  console.log(node.val);
})
console.log('------------------------');
console.log(bst.remove(11));
bst.inOrderTraverse(function (node) {
  console.log(node.val);
})
console.log('------------------------');
