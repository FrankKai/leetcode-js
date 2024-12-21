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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    if(root.left === null&& root.right===null) return 1
    let min = Infinity
    if(root.left){
        min = Math.min(minDepth(root.left), min)
    }
    if(root.right){
        min = Math.min(minDepth(root.right), min)
    }
    return min + 1
};