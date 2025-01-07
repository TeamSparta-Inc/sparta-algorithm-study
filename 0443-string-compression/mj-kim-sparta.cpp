class Solution {
public:
    int compress(vector<char>& chars) {
        char curr = '0';
        int count = 1;
        vector<char> result;
        for (char c: chars) {
            if (c == curr) {
                count++;
            }
            else {
                if (count > 1) {
                    stack<char> stk;
                    while (count > 0) {
                        stk.push(count%10+48);
                        count = count/10;
                    }
                    while (!stk.empty()) {
                        result.push_back(stk.top());
                        stk.pop();
                    }
                }
                result.push_back(c);
                count = 1;
                curr = c;
            }
        }
        if (count > 1) {
            stack<char> stk;
            while (count > 0) {
                stk.push(count%10+48);
                count = count/10;
            }
            while (!stk.empty()) {
                result.push_back(stk.top());
                stk.pop();
            }
        }
        chars = result;
        return chars.size();
    }
};