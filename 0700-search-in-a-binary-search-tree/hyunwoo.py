# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def traverse(self, root: Optional[TreeNode], val):
        if root == None:
            return
        if root.val > val:
            return self.traverse(root.left, val)
        elif root.val < val:
            return self.traverse(root.right, val)
        else:
            return root

    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        answer = self.traverse(root, val)
        return answer
