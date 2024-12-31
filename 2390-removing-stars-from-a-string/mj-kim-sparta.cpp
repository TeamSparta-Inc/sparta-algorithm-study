class Solution {
public:
    string removeStars(string s) {
        deque<char> stk;
        for (char c: s) {
            if (c == '*') stk.pop_back();
            else stk.push_back(c);
        }
        string res = "";
        while (!stk.empty()) {
            res += stk.front();
            stk.pop_front();
        }
        return res;
    }
};