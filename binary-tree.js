class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/** BinaryTree: binary tree for storing values. */

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    function minDepthHelper(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      if (!node.left) return minDepthHelper(node.right) + 1;
      if (!node.right) return minDepthHelper(node.left) + 1;
      return Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1;
    }

    return minDepthHelper(this.root);
  }

  maxDepth() {
    function maxDepthHelper(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      if (!node.left) return maxDepthHelper(node.right) + 1;
      if (!node.right) return maxDepthHelper(node.left) + 1;
      return Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1;
    }

    return maxDepthHelper(this.root);
  }

  maxSum() {
    function maxSumHelper(node) {
      if (!node) return 0;
      const leftSum = Math.max(0, maxSumHelper(node.left));
      const rightSum = Math.max(0, maxSumHelper(node.right));
      maxSumHelper.maxResult = Math.max(
        maxSumHelper.maxResult,
        leftSum + rightSum + node.val
      );
      return Math.max(leftSum, rightSum) + node.val;
    }

    maxSumHelper.maxResult = 0;
    maxSumHelper(this.root);
    return maxSumHelper.maxResult;
  }

  nextLarger(lowerBound) {
    let closest = null;

    function nextLargerHelper(node) {
      if (!node) return;

      if (node.val > lowerBound && (closest === null || node.val < closest)) {
        closest = node.val;
      }

      if (node.left) nextLargerHelper(node.left);
      if (node.right) nextLargerHelper(node.right);
    }

    nextLargerHelper(this.root);
    return closest;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };