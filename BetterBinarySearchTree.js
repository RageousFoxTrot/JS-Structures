function BetterBinarySearchTreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BetterBinarySearchTree() {
  this.root = null;

  this.add = function(data) {
    const node = this.root;

    if (node === null) {
      this.root = new BetterBinarySearchTreeNode(data);
      return;
    } else {
      function searchTree(data) {
        switch (true) {
          case data < node.data:
            switch (true) {
              case node.left === null:
                node.left = new BetterBinarySearchTreeNode(data);
                return;

              case node.right !== null:
                return searchTree(node.left);
            }
            break;

          case data > node.data:
            switch (true) {
              case node.right === null:
                node.right = new BetterBinarySearchTreeNode(data);
                return;

              case node.right !== null:
                return searchTree(node.rigth);
            }
            break;

          default:
            return null;
        }
      }

      return searchTree(node);
    }
  };

  this.find = function(data) {
    let current = this.root;

    while (current.data !== data) {
      if (data < current.left) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    }

    return current;
  };

  this.findMin = function() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  };

  this.findMax = function() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  };

  this.isPresent = function(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  };

  this.remove = function(data) {
    function removeNode(node, data) {
      if (node === null) return null;

      if (data === node.data) {
        if (node.left === null) {
          if (node.right === null) {
            return null;
          }

          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        let $node = node.right;

        while ($node.left !== null) {
          $node = $node.left;
        }
        node.data = $node.data;
        node.right = removeNode(node.right, $node.data);

        return node;
      } else if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }

    this.root = removeNode(this.root, data);
  };

  this.findMinHeight = function(node = this.root) {
    if (node === null) return -1;

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    return ((left < right) ? left : right) + 1;
  };

  this.findMaxHeight = function(node = this.root) {
    if (node === null) return -1;
    
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    return ((left > right) ? left : right) + 1;
  };

  this.findHeightLimits = function(node = this.root) {
    return [this.findMinHeight(), this.findMaxHeight()];
  };

  this.isBalanced = function() {
    return this.findMinHeight() >= this.findMaxHeight - 1;
  };
}

export default {
  BetterBinarySearchTree,
  BetterBinarySearchTreeNode
};
