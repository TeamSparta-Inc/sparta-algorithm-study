class Solution {
    func isValid(_ s: String) -> Bool {
        let dict: [Character: Character] = [
            ")":"(",
            "}":"{",
            "]":"["
            ]
        var stack: [Character] = []

        for c in s {
            if dict.keys.contains(c) {
                if stack.last != dict[c] { return false } 
                stack.popLast()
            }
            else {
                stack.append(c)
            }
        }

        return stack.isEmpty
    }
}