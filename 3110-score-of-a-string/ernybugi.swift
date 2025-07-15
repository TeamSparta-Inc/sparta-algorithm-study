class Solution {
    func scoreOfString(_ s: String) -> Int {
        var sum = 0
        for index in 0..<s.length - 1 {
           let currentChar = s[s.index(s.startIndex, offsetBy: index)]
           let nextChar = s[s.index(s.startIndex, offsetBy: index + 1)]
            
            if let currentCharValue = currentChar.asciiValue, let nextCharValue = nextChar.asciiValue {
                let diff: Int = Int(currentCharValue) - Int(nextCharValue)
                if (diff < 0) {
                    sum -= diff
                } else {
                    sum += diff
                }
            } else {
                print("문자의 ASCII 값이 유효하지 않습니다.")
            }
           
        }
        return sum
    }
}