/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const left = [];
    const right = [];

    function recursive(node, target) {
        if (!node.left && !node.right) {
            target.push(node.val);

            return;
        }

        if (node.left) recursive(node.left, target);
        if (node.right) recursive(node.right, target);
    }

    recursive(root1, left);
    recursive(root2, right);

    return left.every((value, index) => value === right[index]) && right.every((value, index) => value === left[index])
};