/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // 递归
  let sum = 0;
  const calculateSum = (node) => {
    if (node) {
      if (node.val >= low && node.val <= high) {
        sum += node.val;
      }
      calculateSum(node.left);
      calculateSum(node.right);
    }
  };
  calculateSum(root);
  return sum;
  // 栈
  let sum = 0;
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    if (node.left) {
      stack.unshift(node.left);
    }
    if (node.right) {
      stack.unshift(node.right);
    }
  }
  return sum;
};
