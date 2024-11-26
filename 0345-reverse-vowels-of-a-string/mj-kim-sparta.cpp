class Solution {
public:
    string reverseVowels(string s) {
        vector<char> vowels = {'A','a','E','e','I','i','O','o','U','u'};
        vector<pair<int,char>> vs;
        for (int i = 0; i < s.size(); i++) {
            char c = s[i];
            if (find(vowels.begin(),vowels.end(),c)!=vowels.end()) vs.push_back({i,c});
        }
        int len = vs.size();
        if (len == 0) return s;
        string res = "";
        int idx = 0;
        for (int i = 0; i < s.size(); i++) {
            if (vs[idx].first == i) {
                res.push_back(vs[len-1-idx].second);
                if (idx < len-1) idx++;
            }
            else res.push_back(s[i]);
        }
        return res;
    }
};