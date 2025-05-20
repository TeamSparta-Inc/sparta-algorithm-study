class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        let text = String(x)
        var l = text.startIndex
        var r = text.index(before: text.endIndex)

        while l < r {
            if text[l] != text[r] {
                return false
            }

            l = text.index(after: l)
            r = text.index(before: r)
        }

        return true
    }

}