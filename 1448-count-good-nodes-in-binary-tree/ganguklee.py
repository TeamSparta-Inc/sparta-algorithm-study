# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        return self.go(root, root.val)

    def go(self, node: Optional[TreeNode], max: int) -> int:
        if node is None: return 0

        if node.val < max:
            return self.go(node.left, max) + self.go(node.right, max)
        else:
            return 1 + self.go(node.left, node.val) + self.go(node.right, node.val)
            
        
        