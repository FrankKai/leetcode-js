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
var isUnivalTree = function(root) {
    if(!root) return true
    let equalLeft = true;
    let equalRight = true;
    if(root.left){
        equalLeft = root.val === root.left.val
    }
    if(root.right){
        equalRight = root.val === root.right.val
    }
    return equalLeft&&equalRight&& isUnivalTree(root.left)&&isUnivalTree(root.right)
    
};