/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  /**
   * 解法1：递归解法
   */
  const result = [];
  const inorderTraversalNode = (node) => {
    if (node) {
      inorderTraversalNode(node.left);
      result.push(node.val);
      inorderTraversalNode(node.right);
    }
  };
  inorderTraversalNode(root);
  return result;
};
