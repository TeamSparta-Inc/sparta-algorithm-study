/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var goodNodes = function(root) {
    if (!root) return 0;
    
    function dfs(node, max) {
        if (!node) return 0;
        
        let count = 0;
        // 현재 노드의 값이 지금까지의 경로에서 최대값보다 크거나 같으면 good node
        if (node.val >= max) {
            count = 1;
            max = node.val;
        }
        
        // 왼쪽과 오른쪽 서브트리를 재귀적으로 탐색
        const leftCount = dfs(node.left, max);
        const rightCount = dfs(node.right, max);
        
        return count + leftCount + rightCount;
    }
    
    return dfs(root, -Infinity);
};
