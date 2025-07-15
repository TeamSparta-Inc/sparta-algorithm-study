class Solution {
    func scoreOfString(_ s: String) -> Int {
        var score = 0
        let chars = Array(s)
        
        for i in 0..<chars.count-1 {
            let current = Int(chars[i].asciiValue ?? 0)
            let next = Int(chars[i+1].asciiValue ?? 0)
            score += abs(current - next)
        }
        
        return score
    }
}