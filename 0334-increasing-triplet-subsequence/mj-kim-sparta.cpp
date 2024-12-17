class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        pair<int,int> p = {nums[0], INT_MAX};
        for (int i = 1; i < nums.size(); i++) {
            int num = nums[i];
            if (num > p.second) return true;
            else if (num > p.first) p.second = num;
            else p.first = num;
        }
        return false;
    }
};