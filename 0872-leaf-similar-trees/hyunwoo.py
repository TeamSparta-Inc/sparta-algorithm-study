class Solution:
    def traverse(self, root: Optional[TreeNode], leaf_arr):
        if root == None:
            return
        if root.left == None and root.right == None:
            leaf_arr.append(root.val)
        left_depth = self.traverse(root.left, leaf_arr)
        right_depth = self.traverse(root.right, leaf_arr)

    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        root1_arr = []
        root2_arr = []
        self.traverse(root1, root1_arr)
        self.traverse(root2, root2_arr)
        if root1_arr == root2_arr:
            return True
        else:
            return False
