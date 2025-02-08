class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      if (this.root.value === val) {  
        console.log("jdhfmnd");
      }
      this.inserNode(this.root, newNode);
    }
  }

  inserNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.inserNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.inserNode(root.right, newNode);
      }
    }
  }

  search(root, val) {
    if (!root) {
      return false;
    }

    if (root.value === val) {
      return true;
    } else if (val < root.value) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }


  /////////////////////////////////////////////////////////////// Depth-First Traversal (DFS)
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }


  /////////////////////////////////////////////////////////////// Breadth-First Traversal (BFS)
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  delete(val) {
    deletNode(this.root, val);
  }

  deletNode(root, val) {
    //ckehing if empty
    if (!root) {
      return null;
    }

    if (val < root.value) {
      this.deletNode(root.left, val);
    } else if (val > root.value) {
      this.deletNode(root.right, val);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  /////////////////////////////////////////////////////////////// find the max height
  maxHeight(root = this.root) {
    if (!root) return 0;

    let leftChild = this.maxHeight(root.left);
    let rightChild = this.maxHeight(root.right);

    if (leftChild > rightChild) {
      return leftChild + 1;
    } else {
      return rightChild + 1;
    }
  }


  /////////////////////////////////////////////////////////////// check if balanced
  checkBalance(node) {
    if (!node) return { isBalanced: true, height: 0 };

    const left = this.checkBalance(node.left);
    const right = this.checkBalance(node.right);

    const isBalanced = left.isBalanced && right.isBalanced && Math.abs(left.height - right.height) <= 1;

    const height = Math.max(left.height, right.height) + 1;

    return { isBalanced, height };
  }

  isBalanced() {
    return this.checkBalance(this.root).isBalanced;
  }

  /////////////////////////////////////////////////////////////// reverse
  reverse(root = this.root) {
    if (!root) return; // Base case

    [root.left, root.right] = [root.right, root.left]; // Swap children

    if (root.left) this.reverse(root.left); // Process left child
    if (root.right) this.reverse(root.right); // Process right child
  }
  
}

const newBTS = new BTS();
newBTS.insert(5);
newBTS.insert(10);
newBTS.insert(3);
newBTS.insert(8);
newBTS.insert(2);
console.log(newBTS);
console.log(newBTS.search(newBTS.root, 8));
newBTS.preOrder(newBTS.root);
newBTS.inOrder(newBTS.root);
newBTS.levelOrder();
console.log(newBTS.min(newBTS.root));
console.log(newBTS.max(newBTS.root));

////////////// Delete Node

delete(value) {
  this.root = this.deleteNode(this.root, value);
}
deleteNode(node, value) {
  if (!node) return null;

  if (value < node.data) {
    node.left = this.deleteNode(node.left, value);
  } else if (value > node.data) {
    node.right = this.deleteNode(node.right, value);
  }else{
    if( !node.left && !node.right ){
      return null
    }

    if( !node.left) return node.right
    if( !node.right) return node.left

    const minRight = this.findMin(node.right)
    node.data = minRight
    node.right = this.deleteNode(node.right, minRight.right)

  }
  return node
}
