class Solution {
	public int findNextLargest(Tree root, int target){
		while(root.val <= target){
			root = root.right;
		}

		while(root.left != null){
			root = root.left;
		}

		return root.val;
	}
}