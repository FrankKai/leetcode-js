/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length===0){
        return null
    }
    const top = postorder.pop()
    const root = new TreeNode(top)
    const topIndex = inorder.findIndex((item)=>top === item)
    
    root.left = buildTree(inorder.slice(0,topIndex), postorder.slice(0,topIndex))
    root.right = buildTree(inorder.slice(topIndex+1), postorder.slice(topIndex))
    return root;
};