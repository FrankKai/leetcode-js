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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 中序遍历 + 截断对比
      const list = []
      const compare = (left, right) => {
          if(left ===null && right === null){
              return true
          }
          if(left&&right){
              
              return left.val===right.val&&compare(left.left, right.right) && compare(left.right, right.left)
          }
          return false
      }
      if(!root) return true;
      return compare(root.left,root.right);
  };