class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int zcount = 0;
        vector<int> result;
        for (int num: nums) {
            if (num == 0) zcount++;
            else result.push_back(num);
        }
        for (int i = 0; i < zcount; i++) {
            result.push_back(0);
        }
        nums = result;
    }
};