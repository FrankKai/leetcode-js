/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  // 翻转二叉树
  if (!root) return null;
  const mirror = new TreeNode(root.val);
  mirror.left = mirrorTree(root.right);
  mirror.right = mirrorTree(root.left);
  return mirror;
};
