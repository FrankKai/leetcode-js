/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  /**
   * 思路：
   * 使用队列进行层序遍历
   * 遇到左节点不为null，右节点不为null时入队
   * 注意：记录层级
   */
  if (!root) {
    return [];
  }
  const result = [];
  const q = [];
  q.push(root);
  while (q.length !== 0) {
    result.push([]);
    const qSize = q.length;
    for (let i = 1; i <= qSize; i++) {
      const node = q.shift();
      result[result.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return result;
};
