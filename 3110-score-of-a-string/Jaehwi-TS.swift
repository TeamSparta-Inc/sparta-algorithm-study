class Solution {
    func scoreOfString(_ s: String) -> Int {
        var score = 0
        var idx = 0
        while idx < s.count - 1 {
            let index1 = s.index(s.startIndex, offsetBy: idx)
            let index2 = s.index(s.startIndex, offsetBy: idx + 1)

            let char1 = s[index1]
            let char2 = s[index2]

            let value1 = Int(char1.unicodeScalars.first!.value)
            let value2 = Int(char2.unicodeScalars.first!.value)

            score += abs(value1 - value2)
            idx += 1
        }
        return score
    }
}
