class Solution {
    func largestAltitude(_ gain: [Int]) -> Int {
        var maxAltitude = 0
        var currentAltitude = 0
        
        for g in gain {
            currentAltitude += g
            maxAltitude = max(maxAltitude, currentAltitude)
        }   

        return maxAltitude  
    }
}