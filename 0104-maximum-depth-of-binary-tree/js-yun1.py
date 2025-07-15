# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def _maxDepth(level, node):
            l_size, r_size = 0, 0
            if node.left is not None:
                l_size = _maxDepth(level+1, node.left)
            if node.right is not None:
                r_size = _maxDepth(level+1, node.right)
            
            return l_size+1 if l_size > r_size else r_size+1
        
        return _maxDepth(1, root) if root is not None else 0