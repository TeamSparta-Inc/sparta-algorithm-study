class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int mult = 1;
        int zeroCount = 0;
        int zeroIdx = 0;
        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];
            if (num == 0) {
                zeroCount++;
                if (zeroCount == 2) {
                    return vector<int>(nums.size(), 0); 
                }
                zeroIdx = i;
            } else {
                mult *= num;
            }
        }
        if (zeroCount == 1) {
            vector<int> muls(nums.size(), 0);
            muls[zeroIdx] = mult;
            return muls;
        }
        vector<int> muls(nums.size(), mult);
        for (int i = 0; i < nums.size(); i++) {
            muls[i] = mult/nums[i];
        }
        return muls;
    }
};