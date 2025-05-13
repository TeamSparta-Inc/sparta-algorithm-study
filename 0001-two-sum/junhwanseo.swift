class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var numDict = [Int: Int]()
        
        for (index, num) in nums.enumerated() {
            let complement = target - num
            
            if let complementIndex = numDict[complement] {
                return [complementIndex, index]
            }
            
            numDict[num] = index
        }
        
        return []   
    }
}