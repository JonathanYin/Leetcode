/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class SumOfLeftLeaves {

	public int sumOfLeftLeaves(TreeNode root) {
		return sumOfLeftLeavesHelper(root, false);
	}

	public int sumOfLeftLeavesHelper(TreeNode root, boolean b) {
		if (root == null)
			return 0;
		if (root.left == null && root.right == null) {
			if (b)
				return root.val;
			else
				return 0;
		}
		return sumOfLeftLeavesHelper(root.left, true) + sumOfLeftLeavesHelper(root.right, false);
	}
}
