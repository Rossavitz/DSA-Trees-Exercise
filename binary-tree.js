/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minimumDepthHelper(node) {
      if (node.left == null && node.right === null) return 1;
      if (node.left === null) return minimumDepthHelper(node.right) + 1;
      if (node.right === null) return minimumDepthHelper(node.left) + 1;
      return (
        Math.min(
          minimumDepthHelper(node.left),
          minimumDepthHelper(node.right)
        ) + 1
      );
    }
    return minimumDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maximumDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maximumDepthHelper(node.right) + 1;
      if (node.right === null) return maximumDepthHelper(node.left) + 1;
      return (
        Math.max(
          maximumDepthHelper(node.left),
          maximumDepthHelper(node.right)
        ) + 1
      );
    }
    return maximumDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0;
    if (!this.root) return 0;
    function maxSumHelper(node) {
      if (node === null) return 0;

      let l = Math.max(maxSumHelper(node.left), 0);
      let r = Math.max(maxSumHelper(node.right), 0);

      total = Math.max(total, l + r + node.val);
      return Math.max(l + node.val, r + node.val);
    }
    maxSumHelper(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let next = null;
    let q = [this.root];
    while (q.length) {
      const current = q.pop();
      if (current.val > lowerBound && (current.val < next || next === null)) {
        next = current.val;
      }
      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
    }
    return next;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
