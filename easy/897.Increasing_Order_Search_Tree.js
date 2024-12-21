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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    // 中序遍历+重新排序
    const nodes = [];
    const traversal = (node) => {
        if (node === null) return
        if (node) {
            traversal(node.left);
            nodes.push(node.val);
            traversal(node.right);
        }
    }
    traversal(root);
    const [head, ...restNodes] = nodes;
    let tree = new TreeNode(head)
    let treeHead = tree;
    for(const node of restNodes){
        tree.right = new TreeNode(node)
        tree = tree.right;
    }
    return treeHead;
};