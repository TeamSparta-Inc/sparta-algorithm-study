class Solution {
    func romanToInt(_ s: String) -> Int {
        var sum: Int = 0
        var originalString: String = s
        let priorityCharToInt: [String: Int] = [
            "IV": 4,
            "IX": 9,
            "XL": 40,
            "XC": 90,
            "CD": 400,
            "CM": 900,
        ]
        for element in priorityCharToInt {
            let key: String = element.key
            if (originalString.contains(key)) {
                sum += element.value
                originalString = originalString.replacingOccurrences(of: key, with: "")
            }
        }
        let charToInt: [Character: Int] = [
            "I": 1,       
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        ]
        for romanChar in originalString {
            if let tempInt = charToInt[romanChar] {
                sum += tempInt
            } else {
                print("값이 없습니다.")
            }
        }
        return sum
    }
}