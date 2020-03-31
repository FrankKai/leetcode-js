/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  /**
   * 递归 深度优先遍历DFS（Depth First Search）
   * 1.可以理解为先对比两个树的root根节点作为p，q。没有结果返回时，再将两个树的left节点作为p，q进行判断，right节点同理
   * 2.需要注意短路效应，因为左子树先执行判断
   *
   * DFS通常与栈这种数据结构一起出现，可以在leecode的队列和栈专题的《栈和深度优先遍历》深入学习 https://leetcode-cn.com/explore/learn/card/queue-stack/219/stack-and-dfs/
   */
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
