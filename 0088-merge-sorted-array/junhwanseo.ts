function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i=m-1,j=n-1,k=m+n-1;while(j>=0)nums1[k--]=i>=0&&nums1[i]>nums2[j]?nums1[i--]:nums2[j--];
}