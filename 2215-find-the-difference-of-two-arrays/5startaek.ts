function findDifference(nums1: number[], nums2: number[]): number[][] {
    const [set1, set2] = [new Set(nums1), new Set(nums2)];
    
    return [
        [...set1].filter(n => !set2.delete(n)),
        [...set2]
    ];
};