/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length===0 || inorder.length === 0){
        return null;
    }
    const top = preorder.shift();
    const topIndex = inorder.indexOf(top);
    const root = new TreeNode(top);
    root.left = buildTree(preorder,inorder.slice(0, topIndex));
    root.right = buildTree(preorder, inorder.slice(topIndex + 1))
    return root;
};