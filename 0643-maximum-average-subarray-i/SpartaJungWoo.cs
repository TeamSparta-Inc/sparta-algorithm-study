public class Solution {
    public double FindMaxAverage(int[] nums, int k) {
        int tempsum =0;
        int maxSum =0;
        for(int i =0; i<k; i++)
        {
            tempsum+=nums[i];
            maxSum =tempsum;
        }
        for( int i = 1; i< nums.Length-k+1; i++)
        {
            tempsum -= nums[i-1];
            tempsum += nums[i+k-1];
            
            if(tempsum > maxSum)
            {
               maxSum = tempsum;
            }
        }
        double maxAverage = maxSum/(double)k;
        return maxAverage;
    }
}
