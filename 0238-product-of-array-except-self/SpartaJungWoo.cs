public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        			int[] answer = new int[nums.Length];
			int left = 1, right = 1;

			for(int i = 0; i < nums.Length; i++)
			{
				answer[i] = right;
				right *= nums[i];
			}

			for(int i = nums.Length-1; i >= 0; i--)
			{
				answer[i] *= left;
				left *= nums[i];
			}

			return answer;
    }
}