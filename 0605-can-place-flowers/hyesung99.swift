class Solution {
    func canPlaceFlowers(_ flowerbed: [Int], _ n: Int) -> Bool {
        var count = 0
        var flo = flowerbed
        for (i, f) in flo.enumerated() {
            if flo[i] == 0 {
                let emptyLeft = (i == 0) || (flo[i - 1] == 0)
                let emptyRight = (i == flo.count - 1) || (flo[i + 1] == 0)

                if emptyLeft && emptyRight {
                    flo[i] = 1
                    count += 1
                    if count >= n {
                        return true
                    }
                }
            }
        }
        return count >= n 
    }
}
