public class Solution
{
    public bool IsSubsequence(string s, string t)
    {
        bool temp_1 = true;
        int temp_3 = -1;

        for (int i = 0; i < s.Length; i++)
        {
            bool temp_2 = false;
            for (int j = temp_3 + 1; j < t.Length; j++)
            {
                if (s[i] == t[j])
                {
                    temp_2 = true;

                    Console.WriteLine(temp_3 + " " + t[j]);

                    if (temp_3 > j) return false;

                    temp_3 = j;

                    break;
                }
                temp_2 |= false;
            }
            temp_1 &= temp_2;
        }
        return temp_1;
    }
}