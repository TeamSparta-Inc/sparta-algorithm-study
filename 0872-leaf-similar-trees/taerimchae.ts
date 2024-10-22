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
    
    const leafs1: number[] = [];
    const leafs2: number[] = [];
    
    function getLeafs(root: TreeNode | null, leafs: number[]) {
        if (!root) return;

        if(!root.left && !root.right) {
            leafs.push(root.val);
            return;
        }
        
        getLeafs(root.left, leafs);
        getLeafs(root.right, leafs);
    }
    
    getLeafs(root1, leafs1);
    getLeafs(root2, leafs2);
    
    if (leafs1.length !== leafs2.length) return false;
    
    for (let i = 0; i < leafs1.length; i++) {
        if (leafs1[i] !== leafs2[i]) return false;
    }
    
    return true;
};