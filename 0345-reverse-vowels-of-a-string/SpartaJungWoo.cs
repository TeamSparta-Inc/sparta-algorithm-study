public class Solution {
    public string ReverseVowels(string s) {
        List<char> list = new List<char>();
        List<int> listCount = new List<int>();

        for (int i=0; i < s.Length; i++)
        {
            switch(s[i])
            {
                case 'a':
                case 'A':
                case 'e':
                case 'E':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U':
                list.Insert(0, s[i]);
                listCount.Add( i);
                break;
                default:
                break;
            }
        }

        if (list.Count <= 1) return s;

    StringBuilder result = new StringBuilder();


        for(int i=0; i< s.Length; i++)
        {
            if (listCount.Count > 0 && i == listCount[0])
            {
                Console.WriteLine(list[0]);
                result.Append(list[0]);
                list.RemoveAt(0);
                listCount.RemoveAt(0);
                continue;
            }
            
            result.Append(s[i]);
        }

        return result.ToString();
    }
}