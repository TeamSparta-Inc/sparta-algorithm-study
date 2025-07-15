class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        for (i, n) in nums.enumerated() {
            for (j, m) in nums.enumerated() {
                if i == j {
                    continue
                }

                if n+m == target {
                    return [i, j]
                }
            }
        }

        return []
    }
}