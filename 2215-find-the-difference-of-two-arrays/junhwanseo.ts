function findDifference(nums1: number[], nums2: number[]): number[][] {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    const result1 = Array.from(nums1Set).map(num => nums2Set.has(num)?null : num).filter(item=>item !== null);
    const result2 = Array.from(nums2Set).map(num => nums1Set.has(num)?null : num).filter(item=>item !== null);
    

    return [result1, result2]
};