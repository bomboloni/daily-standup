class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(vlaue) {
    this.root = new Node(value)
    this.count = 0
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count++

    let newNode = new Node(value)

    const searchTree = (node) => {
      // if value < node.value go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode
        }
        // if left child, call search again
        else {
          searchTree(node.left)
        }
      }
      // if value > node.value go right
      else if (value > node.value) {
      }
    }
  }

  min() {}

  max() {}

  contains() {}

  // depth first search

  // in-order
  dfsInOrder() {}

  // pre-order
  dsfPreOrder() {}

  // post-order
  dfsPostOrder() {}

  //breadth first search
  bfs() {}
}
