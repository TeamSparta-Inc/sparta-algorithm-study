class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int s = flowerbed.size();
        if (s==1) return flowerbed[0] == 0;

        if (flowerbed[0] + flowerbed[1] == 0) {
            flowerbed[0] = 1;
            n--;
        }

        for (int i = 1; i<s-1; i++) {
            if (flowerbed[i-1]+flowerbed[i]+flowerbed[i+1] == 0) {
                flowerbed[i] = 1;
                n--;
            }
        }

        if (flowerbed[s-2]+flowerbed[s-1] == 0) {
            flowerbed[s-1] = 0;
            n--;
        }
        return n <= 0;
    }
};