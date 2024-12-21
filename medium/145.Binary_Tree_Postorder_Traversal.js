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
var postorderTraversal = function (root) {
  /**
   * 解法1：递归解法
   */
  const result = [];
  const postorderTraversalNode = (node) => {
    if (node) {
      postorderTraversalNode(node.left);
      postorderTraversalNode(node.right);
      result.push(node.val);
    }
  };
  postorderTraversalNode(root);
  return result;
};
