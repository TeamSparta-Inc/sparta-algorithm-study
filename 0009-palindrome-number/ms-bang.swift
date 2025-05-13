class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        
        if x < 0 || (x % 10 == 0 && x != 0) { return false }
        
        var original = x         
        var reversed = 0
        
        
        while original > reversed {
            let lastDigit = original % 10
            reversed = reversed * 10 + lastDigit
            original /= 10
        }
        
        return original == reversed || original == reversed / 10
    }
}