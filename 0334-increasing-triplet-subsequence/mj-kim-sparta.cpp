class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int first = INT_MAX, second = INT_MAX;
        for (int num: nums) {
            if (num > second) return true;
            else if (num > first) second = num;
            else first = num;
        }
        return false;
    }
};