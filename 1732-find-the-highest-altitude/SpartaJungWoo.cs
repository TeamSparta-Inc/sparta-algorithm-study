public class Solution {
    public int LargestAltitude(int[] gain) {
        int currenthight = 0;
        int highest = 0;
        for (int i = 0; i < gain.Length; i++){
            currenthight += gain[i];
            if (highest < currenthight){
                highest = currenthight;
            }
        }

        return highest;
    }
}