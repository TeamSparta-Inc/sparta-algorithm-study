# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def go(self, node:TreeNode) -> int:
        if not node:
            return 0

        return max(self.go(node.left), self.go(node.right)) + 1
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return self.go(root)
        

        