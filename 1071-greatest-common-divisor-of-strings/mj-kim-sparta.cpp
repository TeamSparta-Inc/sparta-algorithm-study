class Solution {
    vector<string> divisors(string str) {
        vector<string> result;
        vector<int> dividedBy;
        for (int i = 1; i <= str.size(); i++) {
            if (str.size()%i == 0) dividedBy.push_back(str.size()/i);
        }
        for (int div: dividedBy) {
            string standard = str.substr(0,div);
            bool check = true;
            for (int i = 0; i < str.size(); i += div) {
                if (str.substr(i,div) != standard) {
                    check = false;
                    break;
                }
            }
            if (check) result.push_back(standard);
        }
        return result;
    }
public:
    string gcdOfStrings(string str1, string str2) {
        vector<string> d1 = divisors(str1);
        vector<string> d2 = divisors(str2);
        for (string d: d1) {
            if (find(d2.begin(), d2.end(), d) != d2.end()) {
                return d;
            }
        }
        return "";
    }
};