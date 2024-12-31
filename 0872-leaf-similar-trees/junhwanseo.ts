/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const root1Storage:number[] = [];
    const root2Storage:number[] = [];

    function getLeaves (node:TreeNode | null, target:number[]) {
        if (node === null) {
            return;
        }

        if (node.left === null && node.right === null) {
            target.push(node.val);
            return;
        }
        getLeaves(node.left, target);
        getLeaves(node.right, target);
    }

    getLeaves(root1, root1Storage);
    getLeaves(root2, root2Storage);

    return root1Storage.toString() === root2Storage.toString();
};
