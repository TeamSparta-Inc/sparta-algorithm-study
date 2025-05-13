class Solution:
    def decodeString(self, s: str) -> str:
        stk = []
        i = 0
        while i < len(s):
            c = s[i]
            if c.isdigit():
                e = s.find('[', i)
                num = int(s[i:e])
                stk.append(num)
                i = e+1
            elif isinstance(c, str) and c not in '[]':
                stk.append(c)
                i += 1
            elif c == ']':
                chunk = []
                p = stk.pop()
                while not isinstance(p, int):
                    chunk.insert(0, p)
                    p = stk.pop()
                chunk_str = ''.join(p*chunk)
                stk.append(chunk_str)
                i += 1

        return ''.join(stk)

        