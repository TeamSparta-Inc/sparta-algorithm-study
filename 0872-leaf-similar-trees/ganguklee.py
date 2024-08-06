# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def go(self, root:TreeNode, array:List):
        if root.left is None and root.right is None:
            array.append(root.val)
        else:
            if root.left: self.go(root.left, array)
            if root.right: self.go(root.right, array)
        
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        a1 = []
        a2 = []
        self.go(root1, a1)
        self.go(root2, a2)

        if len(a1) != len(a2):
            return False
        
        for i, x in enumerate(a1):
            if x != a2[i]:
                return False

        return True


        