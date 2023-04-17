const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.sroot = null;
  }

  root() {
    return this.sroot;
  }

  add( data ) {
    // throw new NotImplementedError('Not implemented');
    this.sroot = addWithIn(this.sroot, data);

    function addWithIn (node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithIn(node.left, data)
      } else {
        node.right = addWithIn(node.right, data)
      }
      return node;
    }
  }

  has( data ) {
    // throw new NotImplementedError('Not implemented');
    return searchWithIn(this.sroot, data);

    function searchWithIn(node, value) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
        searchWithIn(node.left, data) :
        searchWithIn(node.right, data);
    }
  }

  find( data ) {
    // throw new NotImplementedError('Not implemented');
    if (!this.sroot) {
      return null;
    }
    let current = this.sroot;
    while (current) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;

  }

  remove( data ) {
    // throw new NotImplementedError('Not implemented');
    this.sroot = removeNode(this.sroot, data)
    
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node
        }
        if (!node.right) {
          node = node.left;
          return node
        }
        let minFormRight = node.right;
        while (minFormRight.left) {
          minFormRight = minFormRight.left;
        }
        node.data = minFormRight.data;
        node.right = removeNode(node.right, minFormRight.data);
        return node
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if (!this.sroot) {
      return
    }
    let node = this.sroot;
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if (!this.sroot) {
      return;
    }
    let node = this.sroot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};