/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(a, b) {
    let o={},p={},r=[[],[]],i=a.length,j=b.length
    for(;i--;)o[a[i]]=1
    for(;j--;)p[b[j]]=1
    for(i in o)p[i]||r[0].push(+i)
    for(i in p)o[i]||r[1].push(+i)
    return r
};