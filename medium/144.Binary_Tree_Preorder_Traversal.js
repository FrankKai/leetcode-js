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
var preorderTraversal = function (root) {
  /**
   * 解法1：递归解法
   */
  let result = [];
  const preorderTraversalNode = (node) => {
    if (node) {
      result.push(node.val);
      preorderTraversalNode(node.left);
      preorderTraversalNode(node.right);
    }
  };
  preorderTraversalNode(root);
  return result;
  /**
   * 解法2：迭代+栈解法
   */
  const result = [];
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    // 先访问根节点
    result.push(node.val);
    // 压栈右节点，保证左节点先出栈
    if (node.right !== null) {
      stack.push(node.right);
    }
    // 压栈左节点
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return result;
};
