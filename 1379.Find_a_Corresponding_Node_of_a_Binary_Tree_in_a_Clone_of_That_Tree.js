/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  // 遍历到树的末端
  if (original === null) return null;
  // 找到相同节点
  if (original === target) return cloned;
  // 遍历左子树
  let res = getTargetCopy(original.left, cloned.left, target);
  if (res === null) {
    res = getTargetCopy(original.right, cloned.right, target);
  }
  return res;
};
