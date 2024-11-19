class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> res;
        int maxval = 0;
        for (int candy: candies) {
            if (maxval < candy) maxval = candy;            
        }
        for (int candy: candies) {
            res.push_back(maxval <= candy + extraCandies);
        }
        return res;
    }
};