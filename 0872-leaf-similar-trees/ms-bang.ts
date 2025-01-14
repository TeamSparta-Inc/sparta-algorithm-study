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
    const getLeaves = (root: TreeNode | null, leaves: number[]): void => {
        if (!root) return; // 노드가 null이면 종료
        if (!root.left && !root.right) {
            leaves.push(root.val); // 리프 노드라면 값을 추가
            return;
        }
        getLeaves(root.left, leaves); // 왼쪽 서브트리 탐색
        getLeaves(root.right, leaves); // 오른쪽 서브트리 탐색
    };

    const leaves1: number[] = [];
    const leaves2: number[] = [];

    getLeaves(root1, leaves1);
    getLeaves(root2, leaves2);

    if (leaves1.length !== leaves2.length) return false; // 리프 노드 수가 다르면 즉시 false 반환

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false; // 값이 다르면 false 반환
    }

    return true; // 모두 같으면 true 반환
}