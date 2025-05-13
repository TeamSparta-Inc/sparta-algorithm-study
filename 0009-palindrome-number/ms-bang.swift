import Foundation

class Solution {
    /// x가 팰린드롬이면 true, 아니면 false
    @inline(__always)
    func isPalindrome(_ x: Int) -> Bool {
        // 1. 음수 or (끝이 0이면서 0이 아님) → 팰린드롬 불가
        if x < 0 || (x % 10 == 0 && x != 0) { return false }
        
        var orig = x          // 앞쪽 절반
        var rev  = 0          // 뒤쪽 절반(역순)
        
        // 2. 숫자의 절반만 뒤집기
        while orig > rev {
            rev  = rev * 10 + orig % 10
            orig /= 10
        }
        
        // 3. 짝수 자릿수: orig == rev
        //    홀수 자릿수: orig == rev / 10 (가운데 숫자 제거)
        return orig == rev || orig == rev / 10
    }
}