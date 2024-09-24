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
var goodNodes = function(root) {
    let count = 0;

    function dfs(node, max) {
        const newMax = Math.max(max, node.val);
        if (newMax === node.val) count++;

        if (node.left) dfs(node.left, newMax);
        if (node.right) dfs(node.right, newMax);
    }

    dfs(root, root.val);

    return count;
};