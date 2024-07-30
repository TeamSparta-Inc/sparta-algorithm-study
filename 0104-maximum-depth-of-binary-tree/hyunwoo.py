# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def traverse(self, root: Optional[TreeNode], depth: int):
        if root == None:
            return depth
        depth += 1
        left_depth = self.traverse(root.left, depth)
        right_depth = self.traverse(root.right, depth)
        if left_depth > right_depth:
            return left_depth
        else:
            return right_depth

    def maxDepth(self, root: Optional[TreeNode]) -> int:
        depth = 0
        final_depth = self.traverse(root, depth)
        return final_depth
