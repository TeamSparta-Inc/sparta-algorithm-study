public class Solution {
    public string ReverseVowels(string s) {
        List<char> vowels = new List<char>(){'a','A','E', 'e', 'i','I','O','o','u','U'};
        char[] word= new char[s.Length];
        int u=s.Length-1;
        int i=0;


        //leetcode
        while(i<=u){
           
            if(vowels.Any(p=> p==s[i]) && vowels.Any(p=> p==s[u]))
            {
                word[i]=s[u];
                word[u]=s[i];
                i++;
                u--;
            }
            

            else if(!vowels.Any(p=> p==s[i]))
                {word[i]=s[i];
                i++;               
                }
            else if(!vowels.Any(p=> p==s[u]))    
                {
                word[u]=s[u];
                u--;               
                }
        }
        
        
        return new string(word);
    }
}