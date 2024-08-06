# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        lst1 = []
        lst2 = []
        self.preorder_traversal(root1, lst1)
        self.preorder_traversal(root2, lst2)

        return lst1 == lst2

    def preorder_traversal(self, root, lst):
        if root.left:
            self.preorder_traversal(root.left, lst)
        if root.right:
            self.preorder_traversal(root.right, lst)
        if not root.left and not root.right:
            lst.append(root.val)