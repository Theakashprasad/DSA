class Node{
  constructor(val){
    this.value = val
    this.left = null
    this.right = null
  }
}

class BST{
  constructor(){
    this.root = null
  }
  insert(val){
    const newNode = new Node(val)
    if( !this.root ){
       this.root = newNode
    }else{
        this.insertNode(this.root, val)
    }
  }
  insertNode(node, val){
    if( node.value > val ){
      if( node.left !== null){
        node.left = val
      }else{
        this.insertNode(node.left, val)
      }
    }else{
      if( node.right !== val){
        node.right = val
      }else{
        this.insertNode(node.right, val)
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
}

const bst = new BST
bst.insert(5)
bst.insert(10)
bst.insert(3)

bst.preOrder(bst.root)