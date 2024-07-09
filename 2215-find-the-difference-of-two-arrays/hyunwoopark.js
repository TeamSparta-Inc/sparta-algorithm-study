var findDifference = function(nums1, nums2) {
    const copyNumOne = [...nums1]
    const copyNumTwo  = [...nums2]
    const originNum1 = new Set(copyNumOne)
    const originNum2 = new Set(copyNumTwo)
    const setNum1 = new Set(nums1)
    const setNum2 = new Set(nums2)
    for (num of setNum1) {
        setNum2.delete(num)
    }
    for (nom of originNum2) {
        setNum1.delete(nom)
    }
    const answer = [
        [...setNum1],
        [...setNum2]
    ]
    return answer
};